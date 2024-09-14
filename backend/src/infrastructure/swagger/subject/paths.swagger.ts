/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, paginationSchema, successResponseSchema } from "../responses.swagger";
import { subjectSchemas } from "./schemas.swagger";


const createSubjectPath: PathItem = {
  post: {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Subject:POST"
          }
        }
      }
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(subjectSchemas["Subject:POST"]),
          },
        },
        description: "Subject created successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Create a new subject. Allowed roles 'ADMIN' ",
    tags: [ "Subject" ],
  },
};

const getSubjectPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Subject ID",
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
            schema: successResponseSchema(subjectSchemas["Subject:GET"]),
          },
        },
        description: "Subject",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get a subject by id. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Subject" ],
  },
};

const subjectGetPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Search term",
        in: "query",
        name: "name",
        required: false,
        schema: {
          type: "string",
        },
      },
      {
        description: "Division id",
        in: "query",
        name: "divisionId",
        required: false,
        schema: {
          type: "string",
        },
      },
      {
        description: "Category id",
        in: "query",
        name: "categoryId",
        required: false,
        schema: {
          type: "string",
        },
      },
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
              paginationSchema("#/components/schemas/Subject:GET")
            ),
          },
        },
        description: "List of subjects",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get all subjects",
    tags: [ "Subject" ],
  },
};

export const subjectPaths = {
  "/subject": { ...createSubjectPath, ...subjectGetPath },
  "/subject/{id}": { ...getSubjectPath },
};
