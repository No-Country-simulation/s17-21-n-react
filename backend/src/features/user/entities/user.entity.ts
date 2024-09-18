import { SystemGenders } from "../../../shared/constants";

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    lastName: string;
    dni: string;
    phone?: string;
    birthDate : Date; 
    gender: SystemGenders
    roleId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    role?: {name:string}
}