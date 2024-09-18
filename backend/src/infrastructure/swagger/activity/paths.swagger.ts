/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, paginationSchema, successResponseSchema } from "../responses.swagger";
import { ActivitySchema, activitySchemas } from "./schemas.swagger";


const createActivityPath: PathItem = {
  post: {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Activity:POST"
          }
        }
      }
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(activitySchemas["Activity:POST"]),
          },
        },
        description: "Activity created successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Create a new activity. Allowed roles 'TEACHER' ",
    tags: [ "Activity" ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteActivityPath: PathItem = {
  delete: {
    parameters: [
      {
        description: "Activity ID",
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
        description: "Activity deleted successfully",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Delete a activity. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Activity" ],
  },
};



const getActivityPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Activity ID",
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
            schema: successResponseSchema(activitySchemas["Activity:GET"]),
          },
        },
        description: "Activity",
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    summary: "Get a activity by id. Allowed roles 'ADMIN', 'TEACHER' or 'STUDENT'",
    tags: [ "Activity" ],
  },
};

const getActivitiesPath: PathItem = {
  get: {
    parameters: [
      {
        description: "Número de página",
        example    : 1,
        in         : "query",
        name       : "page",
        schema     : {
          type: "number"
        }
      },
      {
        description: "Número de items por página",
        example    : 15,
        in         : "query",
        name       : "limit",
        schema     : {
          type: "number"
        }
      },
      {
        description: "Id de la clase",
        example    : "27d8dafa-8207-4878-bed8-9af291563df7",
        in         : "query",
        name       : "classId",
        schema     : {
          type: "string"
        }
      },
      {
        description: "Campo por el cual deseas ordenar",
        example    : "createdAt",
        in         : "query",
        name       : "orderBy",
        schema     : {
          type: "string"
        }
      },
      {
        description: "asc | desc",
        example    : "desc",
        in         : "query",
        name       : "sort",
        schema     : {
          type: "string"
        }
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(paginationSchema(ActivitySchema)),
          },
        },
        description: "Enrollments found successfully, enrollments data returned",
      },
      ...defaultErrorResponseSchemas()
    },
    summary: "Find a list of activities.",
    tags   : [ "Activity" ],
  },
};

export const activityPaths = {
  "/activity": { ...createActivityPath, ...getActivitiesPath },
  "/activity/{id}": { ...getActivityPath },
};  