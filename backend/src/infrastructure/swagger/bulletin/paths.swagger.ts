
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, successResponseSchema } from "../responses.swagger";
import { BulletinSchema } from "./schemas.swagger";

const createBulletinPath: PathItem = {
  post: {
    summary: "Create a new bulletin. Just for 'ADMIN'",
    tags   : [ "Bulletin" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Bulletin:POST"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(BulletinSchema, "Bulletin created successfully"),
          },
        },
        description: "Bulletin created successfully, bulletin data returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

const updateBulletinPath: PathItem = {
  patch: {
    summary: "Update a bulletin. Just for 'ADMIN'",
    tags   : [ "Bulletin" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "bulletinId",
        in: "path",
        description: "Id del bulletin",
        example: "27d8dafa-8207-4878-bed8-9af291563df7",
        schema: {
          type: "string"
        }
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Bulletin:PATCH"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(BulletinSchema, "Bulletin updated successfully"),
          },
        },
        description: "Bulletin updated successfully, bulletin data returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

const deleteBulletinPath: PathItem = {
  delete: {
    summary: "Delete a bulletin. Just for 'ADMIN'",
    tags   : [ "Bulletin" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "bulletinId",
        in: "path",
        description: "Id del bulletin",
        example: "27d8dafa-8207-4878-bed8-9af291563df7",
        schema: {
          type: "string"
        }
      }
    ],
    responses: {
      204: {
        description: "Bulletin deleted successfully, data no returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

const findUniqueBulletinPath: PathItem = {
  get: {
    summary: "Find a bulletin.",
    tags   : [ "Bulletin" ],
    parameters: [
      {
        name: "bulletinId",
        in: "path",
        description: "Id del bulletin",
        example: "27d8dafa-8207-4878-bed8-9af291563df7",
        schema: {
          type: "string"
        }
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(BulletinSchema),
          },
        },
        description: "Bulletin finded successfully, bulletin data returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

const findManyBulletinPath: PathItem = {
  get: {
    summary: "Find a many bulletines.",
    tags   : [ "Bulletin" ],
    parameters: [
      {
        name: "page",
        in: "query",
        description: "Número de página",
        schema: {
          type: "number"
        },
        example: 1
      },
      {
        name: "limit",
        in: "query",
        description: "Número de items por página",
        schema: {
          type: "number"
        },
        example: 15
      },
      {
        name: "scope",
        in: "query",
        description: "Publico objetivo ('ALL', 'STUDENT', 'PROFESSOR')",
        schema: {
          type: "string"
        },
        example: "STUDENT"
      },
      {
        name: "orderBy",
        in: "query",
        description: "Campo por el cual deseas ordenar",
        schema: {
          type: "string"
        },
        example: "createdAt"
      },
      {
        name: "sort",
        in: "query",
        description: "asc | desc",
        schema: {
          type: "string"
        },
        example: "desc"
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema({
              items: BulletinSchema,
              type: "array"
            }),
          },
        },
        description: "Bulletines finded successfully, bulletines data returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

export const bulletinPaths = {
  "/bulletin": createBulletinPath,
  "/bulletin/{bulletinId}": {
    ...updateBulletinPath,
    ...deleteBulletinPath,
    ...findUniqueBulletinPath
  },
  "/bulletin/all": findManyBulletinPath
};