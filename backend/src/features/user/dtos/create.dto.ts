export interface CreateUserDto {
    email: string;
    password: string;
    name: string;
    lastName:string;
    dni:string;
    roleId : string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RegisterUserDto extends Omit<CreateUserDto, "password">{}