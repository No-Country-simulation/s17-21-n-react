
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";

export const succesResponseSchema = (dataDataSchema:Schema) => {
  return {
    type: "object",
    properties: {
      data: dataDataSchema,
      error: {
        type: "null",
      },
      message: {
        type: "string",
        example: "Login successfully"
      },
      success: {
        type: "boolean",
        example: "true"
      }
    }
  };
};

export const errorResponseSchema = (messageExample?:string) => {
  return {
    type: "object",
    properties: {
      error: {
        type: "boolean",
        example: "true"
      },
      message: {
        type: "string",
        example: messageExample || "It's something ¯\\_(ツ)_/¯"
      },
      success: {
        type: "boolean",
        example: "false"
      }
    }
  };
};