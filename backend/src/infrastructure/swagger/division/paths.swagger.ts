/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, paginationSchema, successResponseSchema } from "../responses.swagger";
import { divisionSchemas } from "./schemas.swagger";


const createDivisionPath: PathItem = {
  post: {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Division:POST"
          }
        }
      }
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(divisionSchemas["Division:POST"]),
          },
        },
        description: "Division created successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Create a new division. Allowed roles 'ADMIN' ",
    tags: [ "Division" ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteDivisionPath: PathItem = {
  delete: {
    parameters: [
      {
        description: "Division ID",
        in: "path",
        name: "id",
        required: true,
        schema: {
          format: "uuid",
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(),
          },
        },
        description: "Division deleted successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Delete a division. Allowed roles 'ADMIN' ",
    tags: [ "Division" ],
  },
};



const getDivisionPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Division ID",
        in: "path",
        name: "id",
        required: true,
        schema: {
          format: "uuid",
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(divisionSchemas["Division:GET"]),
          },
        },
        description: "Division",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get a division by id. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Division" ],
  },
};

const getDivisionsPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Page number",
        in: "query",
        name: "page",
        schema: {
          type: "number",
        },
      },
      {
        description: "Elements per page",
        in: "query",
        name: "size",
        schema: {
          type: "number",
        },
      },
      {
        description:
          "asc or desc. By default, it's asc if orderBy is set and sort isn't",
        in: "query",
        name: "sort",
        schema: {
          enum: [ "asc", "desc" ],
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(
              paginationSchema("#/components/schemas/Division:GET")
            ),
          },
        },
        description: "List of divisions",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get all divisions",
    tags: [ "Division" ],
  },
};

export const divisionPaths = {
  "/division": { ...createDivisionPath, ...getDivisionsPath },
  "/division/{id}": { ...getDivisionPath },
};  
