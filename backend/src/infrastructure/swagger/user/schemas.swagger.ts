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
      example: "user@example.com"
    },
    password: {
      type: "string",
      description: "Contraseña del usuario",
      example: "password123"
    },
    name: {
      type: "string",
      description: "Nombre del usuario",
      example: "John"
    },
    last_name: {
      type: "string",
      description: "Apellido del usuario",
      example: "Doe"
    },
    dni: {
      type: "string",
      description: "Documento Nacional de Identidad",
      example: "12345678"
    },
    roleId: {
      type: "string",
      description: "ID del rol asignado al usuario",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    }
  }
};

export const userSchemas = {
  "User:POST": createUserSchema
};