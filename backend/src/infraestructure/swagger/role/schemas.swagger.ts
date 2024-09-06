/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";

export const createRoleShema:Schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Nombre del rol",
      example: "ADMIN"
    }
  }
};

export const roleSchema: Schema = {
  type: "object",
  properties: {
    ...createRoleShema["properties"],
    id: {
      type: "string",
      description: "ID del rol",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    }
  }
};

export const roleSchemas = {
  "Role:GET": roleSchema,
  "Role:POST": createRoleShema,
};