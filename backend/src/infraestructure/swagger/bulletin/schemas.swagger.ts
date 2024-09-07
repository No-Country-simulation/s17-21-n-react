/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";
import { omitKeys } from "../../../shared/utils";

export const BulletinSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID del bulletin",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    title: {
      type: "string",
      description: "Título del bulletin",
      example: "Inicio de matriculas 10 de junio"
    },
    description: {
      type: "string",
      description: "Descripción general del bulletin",
      example: "Llevar la documentación requerida a la oficina general de la escuela"
    },
    scope: {
      type: "string",
      description: "Publico objetivo del bulletin ('PROFESSOR', 'STUDENT', 'ALL'",
      example: "STUDENT"
    },
    eventDate: {
      type: "date",
      description: "Fecha limite evento del bulletin",
      example: "2024-09-06T01:10:31.006Z"
    },
    isActived: {
      type: "boolean",
      description: "Estado que representa si un bulletin se muestra o no",
      example: true
    }
  }
};

export const createBulletinSchema: Schema = {
  type: "object",
  required: [ "title", "description", "scope", "eventDate" ],
  properties: {
    ...omitKeys(BulletinSchema["properties"], [ "id" ])
  }
};

export const updateBulletinSchema: Schema = {
  type: "object",
  properties: {
    ...omitKeys(BulletinSchema["properties"], [ "id" ])
  }
};

export const bulletinSchemas = {
  "Bulletin:POST": createBulletinSchema,
  "Bulletin:PATCH": updateBulletinSchema
};