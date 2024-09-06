export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    last_name: string;
    dni: string;
    roleId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    role?: {name:string}
}