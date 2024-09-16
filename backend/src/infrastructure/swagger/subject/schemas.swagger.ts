import { Schema } from "swagger-jsdoc";

export const createSubjectSchema: Schema = {
  properties: {
    categoryId: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    description: {
      example: "Matemáticas 1",
      type   : "string",
    },
    divisionId: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    name: {
      example: "Matemáticas 1",
      type   : "string",
    },
    scheduleEnd: {
      example: "10:00",
      type   : "string",
    },
    scheduleInit: {
      example: "08:00",
      type   : "string",
    },
  },
  required: [
    "name",
    "description",
    "scheduleInit",
    "scheduleEnd",
    "divisionId",
    "categoryId",
  ],
  type: "object",
};

export const updateSubjectSchema: Schema = {
  properties: {
    ...createSubjectSchema.properties,
  },
  required: [
    "id",
  ],
  type: "object",
};

export const getSubjectSchema: Schema = {
  properties: {
    _count: {
      example: {
        classes: 1,
      },
      type: "object",
    },
    categoryId: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    description: {
      example: "Matemáticas 1",
      type   : "string",
    },
    divisionId: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    id: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    isDeleted: {
      example: false,
      type   : "boolean",
    },
    name: {
      example: "Matemáticas",
      type   : "string",
    },
    scheduleEnd: {
      example: "10:00",
      type   : "string",
    },
    scheduleInit: {
      example: "08:00",
      type   : "string",
    },
  },
  type: "object",
};

export const subjectSchemas = {
  "Subject:GET" : getSubjectSchema,
  "Subject:POST": createSubjectSchema,
  "Subject:PUT" : updateSubjectSchema,
};
