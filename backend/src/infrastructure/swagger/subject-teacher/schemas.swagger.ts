import { Schema } from "swagger-jsdoc";

export const createSubjectTeacherSchema: Schema = {
  properties: {
    subjectId: {
      description: "ID del curso",
      example    : "27d8dafa-8207-4878-bed8-9af291563df7",
      type       : "string",
    },
    teacherId: {
      description: "ID del profesor",
      example    : "27d8dafa-8207-4878-bed8-9af291563df7",
      type       : "string",
    },
    yearId: {
      description: "ID del Año académico en curso",
      example    : "27d8dafa-8207-4878-bed8-9af291563df7",
      type       : "string",
    },
  },
  required: [
    "subjectId",
    "teacherId",
    "yearId"
  ],
  type: "object",
};

export const getSubjectTeacherSchema: Schema = {
  properties: {
    id: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    subjectId: {
      example: "27d8dafa-8207-4878-bed8-9af291563df7",
      type   : "string",
    },
    teacherId: {
      example: "27d8dafa-8207-4878-bed8-9af291563df7",
      type   : "string",
    },
    yearId: {
      example: "27d8dafa-8207-4878-bed8-9af291563df7",
      type   : "string",
    },
  },
  type: "object",
};

export const subjectTeacherSchemas = {
  "SubjectTeacher:GET" : getSubjectTeacherSchema,
  "SubjectTeacher:POST": createSubjectTeacherSchema
};
