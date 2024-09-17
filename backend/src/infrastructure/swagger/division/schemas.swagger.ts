import { Schema } from "swagger-jsdoc";

export const createDivisionSchema: Schema = {
  properties: {
    name: {
      example: "A",
      type   : "string",
    },
  },
  required: [
    "name",
  ],
  type: "object",
};

export const updateDivisionSchema: Schema = {
  properties: {
    ...createDivisionSchema.properties,
  },
  required: [],
  type    : "object",
};

export const getDivisionSchema: Schema = {
  properties: {
    id: {
      example: "933e9ea3-cbd2-45d3-8bd3-90f341e2fb26",
      format : "uuid",
      type   : "string",
    },
    name: {
      example: "A",
      type   : "string",
    },
  },
  required: [
    "id",
    "name",
  ],
  type: "object",
};

export const divisionSchemas = {
  "Division:GET"  : getDivisionSchema,
  "Division:PATCH": updateDivisionSchema,
  "Division:POST" : createDivisionSchema,
};
