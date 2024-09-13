
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";

export const succesResponseSchema = (dataDataSchema:Schema, message?: string) => {
  return {
    type: "object",
    properties: {
      data: dataDataSchema,
      error: {
        type: "boolean",
        example: "false",
      },
      message: {
        type: "string",
        example: message ?? "Request successfully"
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

export const defaultErrorResponseSchemas = () => {
  return {
    400: {
      content: {
        "application/json": {
          schema: errorResponseSchema(),
        },
      },
      description: "Bad request, validation errors",
    },
    500: {
      content: {
        "application/json": {
          schema: errorResponseSchema(),
        },
      },
      description: "Internal server error",
    },
  }; 
};

export const PaginateResponseSchema = (dataDataSchema:Schema, message?: string) => {
  return succesResponseSchema({
    type: "object",
    properties: {
      content: {
        items: dataDataSchema,
        type: "array"
      },
      meta: {
        type: "object",
        properties: {
          currentPage: {
            type: "number",
            description: "current page of paginate",
            example: 1
          },
          pageSize: {
            type: "number",
            description: "items by page",
            example: 15
          },
          total: {
            type: "number",
            description: "total items",
            example: 30
          },
          totalPages: {
            type: "number",
            description: "total pages",
            example: 1
          }
        }
      }
    }
  }, message);
};