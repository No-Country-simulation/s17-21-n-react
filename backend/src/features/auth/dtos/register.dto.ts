export interface RegisterAdminDto {
    email: string;
    password: string;
    name: string;
    lastName:string;
    dni:string;
    roleId : string;
}

export interface RegisterRolDto {
    name: string;
}