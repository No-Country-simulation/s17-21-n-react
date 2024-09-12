
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";

const authLoginPath:PathItem = {
  post: {
    summary: "Create a new user. Just for 'ADMIN'",
    tags   : [ "User" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User:POST"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Auth:Success",
            },
          },
        },
        description: "Sign-in successful, user data returned",
      },
      400: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Auth:Error",
            },
          },
        },
        description: "Bad request, validation errors",
      },
      500: {
        content: {
          "application/json": {
            schema: {
              properties: {
                msg: {
                  description: "Error message",
                  type       : "string",
                },
                ok: {
                  description: "Indica si la solicitud fue exitosa",
                  example    : false,
                  type       : "boolean",
                },
              },
              type: "object",
            },
          },
        },
        description: "Internal server error",
      },
    },
  },
};

export const userPaths = {
  "/user":{ ...authLoginPath },
};