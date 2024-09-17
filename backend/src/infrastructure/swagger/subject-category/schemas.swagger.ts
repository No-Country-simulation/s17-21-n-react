import { Schema } from "swagger-jsdoc";

export const createSubjectCategorySchema: Schema = {
  properties: {
    name: {
      example: "Matemáticas",
      type   : "string",
    },
  },
  required: [
    "name",
  ],
  type: "object",
};

export const updateSubjectCategorySchema: Schema = {
  properties: {
    ...createSubjectCategorySchema.properties,
  },
  required: [],
  type    : "object",
};

export const getSubjectCategorySchema: Schema = {
  properties: {
    id: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    name: {
      example: "Matemáticas 1",
      type   : "string",
    },
  },
  type: "object",
};

export const subjectCategorySchemas = {
  "SubjectCategory:GET" : getSubjectCategorySchema,
  "SubjectCategory:POST": createSubjectCategorySchema,
  "SubjectCategory:PUT" : updateSubjectCategorySchema,
};
