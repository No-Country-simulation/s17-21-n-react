/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { PathItem } from "swagger-jsdoc";
import { successResponseSchema } from "../responses.swagger";
import { roleSchema } from "./schemas.swagger";

const getAllRoles: PathItem = {
  get:{
    summary: "Just a list with the system roles :)",
    tags: [ "Role" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    responses:{
      200: {
        description: "Roles list",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Role:GET"
              }
            },
          },
        },
      }
    }
  }
};

const createRole: PathItem = {
  post:{
    summary: "Create a role, just for 'ADMIN'",
    tags: [ "Role" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    requestBody:{
      content:{
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Role:POST"
          }
        }
      }
    },
    responses:{
      201: {
        description: "New Role data",
        content: {
          "application/json": {
            schema: successResponseSchema(roleSchema)
          },
        },
      }
    }
  }
};

export const rolePaths = {
  "/role":{ ...getAllRoles, ...createRole }
};