export interface UpdateUserDto {
    email?: string;
    password?: string;
    name?: string;
    lastName?: string;
    dni?: string;
    phone?: string;
    birthDate?: Date;
    roleId?: string;
    isActive?: boolean;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UpdateUserDataDto extends Omit<UpdateUserDto, "deletedAt" | "updatedAt" | "password">{
}

export interface UpdatePasswordDto {
    newPassword: string;
    newPasswordConfirm: string;
    password: string;
}

export interface UpdateEmailDto {
    newEmail:string;
    password: string;
}