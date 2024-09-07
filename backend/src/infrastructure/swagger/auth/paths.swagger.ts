
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { PathItem } from "swagger-jsdoc";

const authLoginPath:PathItem = {
  post: {
    summary: "Login with email and password",
    tags   : [ "Auth" ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            properties: {
              email: {
                description: "The user's email address",
                example    : "sdasd@dasd.co",
                type       : "string",
              },
              password: {
                description: "The user's password",
                example    : "asdasdsd",
                maxLength  : 24,
                minLength  : 10,
                type       : "string",
              },
            },
            required: [ "email", "password" ],
            type    : "object",
          },
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
    },
  },
};

export const authPaths = { 
  "/auth/login": authLoginPath 
};