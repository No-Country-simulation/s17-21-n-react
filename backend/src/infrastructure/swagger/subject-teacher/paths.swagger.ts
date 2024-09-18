/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, paginationSchema, successResponseSchema } from "../responses.swagger";
import { subjectTeacherSchemas } from "./schemas.swagger";


const createSubjectTeacherPath: PathItem = {
  post: {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SubjectTeacher:POST"
          }
        }
      }
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(subjectTeacherSchemas["SubjectTeacher:POST"]),
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
    summary: "Create a new subject teacher. Allowed roles 'ADMIN' ",
    tags: [ "Subject Teacher" ],
  },
};

const deleteSubjectTeacherPath: PathItem = {
  delete: {
    parameters: [
      {
        description: "Subject teacher ID",
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
        description: "Subject teacher deleted successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Delete a subject teacher. Allowed roles 'ADMIN' ",
    tags: [ "Subject Teacher" ],
  },
};



const getSubjectTeacherPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Subject teacher ID",
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
            schema: successResponseSchema(subjectTeacherSchemas["SubjectTeacher:GET"]),
          },
        },
        description: "Subject teacher",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get a subject teacher by id. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Subject Teacher" ],
  },
};

const subjectTeacherGetPath: PathItem = {
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
              paginationSchema("#/components/schemas/SubjectTeacher:GET")
            ),
          },
        },
        description: "List of subject teachers",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get all subject teachers",
    tags: [ "Subject Teacher" ],
  },
};

export const subjectTeacherPaths = {
  "/subject-teacher": { ...createSubjectTeacherPath, ...subjectTeacherGetPath },
  "/subject-teacher/{id}": { ...getSubjectTeacherPath, ...deleteSubjectTeacherPath },
};
