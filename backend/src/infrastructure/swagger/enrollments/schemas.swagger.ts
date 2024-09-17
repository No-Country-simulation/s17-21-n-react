/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";
import { omitKeys } from "../../../shared/utils";

export const EnrollmentSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID del registro de matrícula",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    studentId: {
      type: "string",
      description: "ID del estudiante",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    divisionId: {
      type: "string",
      description: "ID de la sección",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    yearId: {
      type: "string",
      description: "ID del año académico en curso",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    subjectId: {
      type: "string",
      description: "Fecha limite evento del bulletin",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    }
  }
};

export const createEnrollmentSchema: Schema = {
  type: "object",
  required: [ "studentId", "divisionId", "yearId", "subjectId" ],
  properties: {
    ...omitKeys(EnrollmentSchema["properties"], [ "id" ])
  }
};

export const updateEnrollmentSchema: Schema = {
  type: "object",
  properties: {
    ...omitKeys(EnrollmentSchema["properties"], [ "id" ])
  }
};

export const enrollmentSchemas = {
  "Enrollment:POST": createEnrollmentSchema,
  "Enrollment:PATCH": updateEnrollmentSchema
};