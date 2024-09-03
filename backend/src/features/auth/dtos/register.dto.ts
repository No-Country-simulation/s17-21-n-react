export interface RegisterAdminDto {
    email: string;
    password: string;
    name: string;
    last_name:string;
    dni:string;
    roleId : string;
}

export interface RegisterRolDto {
    name: string;
}