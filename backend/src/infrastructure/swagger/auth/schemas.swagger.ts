/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";
import {
  errorResponseSchema,
  successResponseSchema,
} from "../responses.swagger";
const loginDataSchema: Schema = {
  type: "object",
  properties: {
    token: { type: "string", description: "El JWT" },
    user: {
      type: "object",
      properties: {
        email: { type: "string" },
        id: { type: "string" },
        name: { type: "string" },
        last_name: { type: "string" },
        roleId: { type: "string" },
      },
    },
  },
};

export const authSchemas = {
  "Auth:Success": successResponseSchema(loginDataSchema),
  "Auth:Error": errorResponseSchema("Error login user"),
};
