export interface UpdateUserDto {
    email?: string;
    password?: string;
    name?: string;
    lastName?: string;
    dni?: string;
    roleId?: string;
    isActive?: boolean;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UpdateUserDataDto extends Omit<UpdateUserDto, "deletedAt" | "updatedAt" | "password">{
}