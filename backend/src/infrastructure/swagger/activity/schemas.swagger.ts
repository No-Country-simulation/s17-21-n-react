/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";
import { omitKeys } from "../../../shared/utils";

export const ActivitySchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID de la actividad",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    activityType: {
      description: "Tipo de actividad a crear",
      example    : "ASSIGNMENT",
      type       : "string",
    },
    classId: {
      description: "ID de la clase",
      example    : "27d8dafa-8207-4878-bed8-9af291563df7",
      type       : "string",
    },
    description: {
      description: "Descripcion literal de la actividad",
      example    : "Se desarrollaran ejercicios de recurrencia del archivo adjunto de la pag 110 a la 121",
      type       : "string",
    },
    dueDate: {
      description: "Fecha de vencimiento de la Actividad(sea tarea, examen u otra)",
      example    : "2024-09-06T01:10:31.006Z",
      type       : "string",
    },
    files: {
      description: "Array of files link",
      example    : "['https://myfile/n/asdsd.pdf']",
      type       : "array",
      items      : {
        type: "string",
      }
    },
    name: {
      description: "Nombre corto de la actividad",
      example    : "Actividad Recurrencia",
      type       : "string",
    },
  }
};


export const createActivitySchema: Schema = {
  required: [ "name", "dueDate", "activityType", "classId" ],
  properties: {
    ...omitKeys(ActivitySchema["properties"], [ "id" ])
  }
};

export const updateActivitySchema: Schema = {
  type: "object",
  properties: {
    ...omitKeys(ActivitySchema["properties"], [ "id" ])
  }
};

export const getActivitySchema: Schema = {
  type: "object",
  properties: {
    ...omitKeys(ActivitySchema["properties"], [ "id" ])
  }
};

export const activitySchemas = {
  "Activity:GET": getActivitySchema,
  "Activity:PATCH": updateActivitySchema,
  "Activity:POST" : createActivitySchema,
};