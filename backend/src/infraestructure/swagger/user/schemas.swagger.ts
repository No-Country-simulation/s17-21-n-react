/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";

export const createUserSchema: Schema = {
  type: "object",
  required: [ "email", "password", "name", "last_name", "dni", "roleId" ],
  properties: {
    email: {
      type: "string",
      format: "email",
      description: "Correo electrónico del usuario",
      example: "user@example.com",
    },
    name: {
      type: "string",
      description: "Nombre del usuario",
      example: "John",
    },
    lastName: {
      type: "string",
      description: "Apellido del usuario",
      example: "Doe",
    },
    dni: {
      type: "string",
      description: "Documento Nacional de Identidad",
      example: "12345678",
    },
    roleId: {
      type: "string",
      description: "ID del rol asignado al usuario",
      example: "27d8dafa-8207-4878-bed8-9af291563df7",
    },
  },
};

const updateUserSchema = {
  type: "object",
  required: [],
  properties: {
    ...createUserSchema.properties,
    password: undefined,
  },
};

const getUserSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
    },
    email: {
      type: "string",
      format: "email",
      example: "administrador@test.com",
    },
    name: {
      type: "string",
      example: "Admin",
    },
    lastName: {
      type: "string",
      example: "EducaPro",
    },
    dni: {
      type: "string",
      example: "99999999",
    },
    roleId: {
      type: "string",
      format: "uuid",
      example: "daf21204-e875-4bca-b1bd-83aa5379d744",
    },
    isActive: {
      type: "boolean",
      example: false,
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2024-09-06T00:39:34.569Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2024-09-09T19:56:47.653Z",
    },
    deletedAt: {
      type: "string",
      format: "date-time",
      example: "2024-09-09T19:56:47.652Z",
    },
    role: {
      type: "string",
      example: "ADMIN",
    },
  },
  required: [
    "id",
    "email",
    "name",
    "lastName",
    "role",
    "isActive",
    "createdAt",
    "updatedAt",
  ],
};

export const successUsersGet = {
  type:"array",
  items: {
    $ref:"#/components/schemas/User:GET"
  }
};

export const userSchemas = {
  "User:POST": createUserSchema,
  "User:PATCH": updateUserSchema,
  "User:GET": getUserSchema
};
