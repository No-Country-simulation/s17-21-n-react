import { User } from "@prisma/client";
import { SystemBaseRoles } from "../../../shared/constants";
import { hashPassword, SortOrderType } from "../../../shared/utils";
import generatePassword from "../../../shared/utils/generatePassword.utils";
import { RoleRepository } from "../../role/repositories/role.repository";
import { RegisterUserDto } from "../dtos/create.dto";
import { FilterUsers, FindUsersOptionsDto, orders, SelectUserDto } from "../dtos/select.dto";
import { UpdateUserDataDto } from "../dtos/update.dto";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository
  ) {}

  async createUser(dto: RegisterUserDto) {
    const existingRole = await this.roleRepository.findById(dto.roleId);
    if (!existingRole) throw Error("Role does not exists");

    await this.validateDniOrThrow(dto.dni);
    await this.validateEmailOrThrow(dto.email);

    const generatedPassword = generatePassword();
    const password = await hashPassword(generatedPassword);

    const newUser = await this.userRepository.createUser({ ...dto, password });

    return { ...newUser, password: generatedPassword };
  }

  async updateUser(
    userId: string,
    dto: UpdateUserDataDto
  ): Promise<SelectUserDto> {
    const existingUser = await this.getUserByIdOrThrow(userId, true);
    if (dto.roleId) {
      const existingRole = await this.roleRepository.findById(dto.roleId);
      if (!existingRole) throw Error("Role does not exists");
      if (
        existingUser &&
        existingUser.role == SystemBaseRoles.ADMIN &&
        existingRole.id != dto.roleId
      ) {
        const countAdmins = await this.roleRepository.countByRole(
          SystemBaseRoles.ADMIN
        );
        if (countAdmins <= 1) throw Error("Cannot change this user role");
      }
    }

    await this.validateDniOrThrow(dto.dni, userId);
    await this.validateEmailOrThrow(dto.email, userId);

    const updatedUser = await this.userRepository.updateUser(userId, dto);
    return {
      ...updatedUser,
      password: undefined,
      role    : updatedUser?.role?.name,
    } as SelectUserDto;
  }

  async getUserByIdOrThrow(
    userId: string,
    isActive?: boolean
  ): Promise<SelectUserDto> {
    const user = await this.userRepository.findUserById(userId, isActive);
    if (!user) throw Error("User not found");

    return {
      ...user,
      password: undefined,
      role    : user.role?.name,
    } as SelectUserDto;
  }

  async getUsers(findOptions: FindUsersOptionsDto) {
    const { isActive, page, limit, orderBy, role, s, sort } = findOptions;
    
    const filterOptions:FilterUsers = {
      isActive: !isActive
        ? undefined
        : isActive === "1"
          ? true
          : false,
      pagOptions: {
        limit  : (limit && isNaN(parseInt(limit))) || !limit ? 15 : parseInt(limit),
        orderBy: orderBy && orders.includes(orderBy) ? orderBy as keyof User : undefined,
        page   : isNaN(parseInt(page)) ? 1 : parseInt(page),
        sort   : sort =="asc" || sort == "desc" ? sort as SortOrderType : undefined
      },
      role       : role ? role as SystemBaseRoles : undefined,
      searchParam: s?s:undefined
    };

    const users = await this.userRepository.findUsersAndCount(filterOptions);
    const usersData =  users.data.map((user) => {
      return { ...user, password: undefined, role: user.role.name };
    });
    return {
      meta: {
        currentPage: filterOptions.pagOptions.page!,
        pageSize   : filterOptions.pagOptions.limit,
        total      : users.count,
        totalPages : Math.ceil(users.count / filterOptions.pagOptions.limit!),
      },
      users: usersData,
    };
  }

  async softDeleteUser(userId: string) {
    const user = await this.getUserByIdOrThrow(userId, true);
    if (user.name === SystemBaseRoles.ADMIN) {
      const countAdmins = await this.roleRepository.countByRole(
        SystemBaseRoles.ADMIN
      );
      if (countAdmins <= 1) throw Error("Cannot delete this user");
    }
    const updatedUser = await this.userRepository.updateUser(userId, {
      deletedAt: new Date(),
      isActive : false,
      password : "#deleted",
    });
    return updatedUser;
  }

  private async validateDniOrThrow(userDni?: string, userId?: string) {
    if (userDni) {
      const existingDni = await this.userRepository.findUserByDni(userDni);
      if (userId && existingDni && existingDni.id === userId) return;
      if (existingDni) throw Error("DNI already registered");
    }
  }

  private async validateEmailOrThrow(userEmail?: string, userId?: string) {
    if (userEmail) {
      const existingEmail = await this.userRepository.findUserByEmail(
        userEmail
      );
      if (userId && existingEmail && existingEmail.id === userId) return;
      if (existingEmail) throw Error("Email already in use");
    }
  }
}
