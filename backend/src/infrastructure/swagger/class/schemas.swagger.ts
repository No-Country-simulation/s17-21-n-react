/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";

export const createClassSchema: Schema = {
  type: "object",
  required: [ "name", "date", "subjectId", "divisionId", "yearId" ],
  properties: {
    name: {
      type: "string",
      description: "Nombre de la clase",
      example: "Clase 1",
    },
    date: {
      type: "date",
      description: "Fecha de la clase (DD-MM-YYY | DD/MM/YYYY | ISO)",
      example: "2024-09-19T01:10:31.006Z",
    },
    subjectId: {
      type: "string",
      description: "ID del materia",
      example: "27d8dafa-8207-4878-bed8-9af291563df7",
    },
    yearId: {
      type: "string",
      description: "ID del año escolar",
      example: "27d8dafa-8207-4878-bed8-9af291563df7",
    },
  },
};

const updateClassSchema = {
  type: "object",
  required: [],
  properties: {
    ...createClassSchema.properties,
  },
};

const getClassSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
    },
    name: {
      example: "Clase 1",
    },
    date: {
      type: "date",
      example: "2024-09-19T05:00:00.000Z",
    },
    subjectId: {
      type: "string",
      format: "uuid",
      example: "daf21204-e875-4bca-b1bd-83aa5379d744",
    },
    divisionId: {
      type: "string",
      format: "uuid",
      example: "daf21204-e875-4bca-b1bd-83aa5379d744",
    },
    yearId: {
      type: "string",
      format: "uuid",
      example: "daf21204-e875-4bca-b1bd-83aa5379d744",
    },
    _count: { 
      type: "object",
      properties: {
        activities: {
          type: "integer",
          format: "int32",
          description: "Cantidad de actividades asociadas a la clase",
          example: 4,
        }
      }
    },
    isDeleted: {
      type: "boolean",
      example: false,
    }
  },
  required: [
    "id",
    "name",
    "date",
    "subjectId",
    "divisionId",
    "yearId",
    "_count",
    "isDeleted",
  ],
};

export const successClassesGet = {
  type: "array",
  items: {
    $ref: "#/components/schemas/Class:GET",
  },
};

export const classSchemas = {
  "Class:POST": createClassSchema,
  "Class:PUT": updateClassSchema,
  "Class:GET": getClassSchema,
};
