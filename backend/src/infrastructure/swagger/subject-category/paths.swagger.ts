/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, paginationSchema, successResponseSchema } from "../responses.swagger";
import { subjectCategorySchemas } from "./schemas.swagger";


const createSubjectCategoryPath: PathItem = {
  post: {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SubjectCategory:POST"
          }
        }
      }
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(subjectCategorySchemas["SubjectCategory:POST"]),
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
    summary: "Create a new subject category. Allowed roles 'ADMIN' ",
    tags: [ "Subject Category" ],
  },
};

const updateSubjectCategoryPath: PathItem = {
  put: {
    parameters: [
      {
        description: "Subject category ID",
        in: "path",
        name: "id",
        required: true,
        schema: {
          format: "uuid",
          type: "string",
        },
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SubjectCategory:PUT",
          },
        },
      },
      required: true,
    },

    responses: { 
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(subjectCategorySchemas["SubjectCategory:GET"]),
          },
        },
        description: "Subject category updated successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Update a subject category. Allowed roles 'ADMIN' ",
    tags: [ "Subject Category" ],
  },
};

const deleteSubjectCategoryPath: PathItem = {
  delete: {
    parameters: [
      {
        description: "Subject category ID",
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
        description: "Subject category deleted successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Delete a subject category. Allowed roles 'ADMIN' ",
    tags: [ "Subject Category" ],
  },
};



const getSubjectCategoryPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Subject category ID",
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
            schema: successResponseSchema(subjectCategorySchemas["SubjectCategory:GET"]),
          },
        },
        description: "Subject category",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get a subject category by id. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Subject Category" ],
  },
};

const subjectCategoryGetPath: PathItem = {
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
              paginationSchema("#/components/schemas/SubjectCategory:GET")
            ),
          },
        },
        description: "List of subject categories",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get all subject categories",
    tags: [ "Subject Category" ],
  },
};

export const subjectCategoryPaths = {
  "/subject-category": { ...createSubjectCategoryPath, ...subjectCategoryGetPath },
  "/subject-category/{id}": { ...getSubjectCategoryPath, ...updateSubjectCategoryPath, ...deleteSubjectCategoryPath },
};
