
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { SystemBaseRoles } from "../../../shared/constants";
import { paginationSchema, successResponseSchema } from "../responses.swagger";
import { userSchemas } from "./schemas.swagger";
import { orders } from "../../../features/user/dtos/select.dto";

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
    },
  },
};

const updateUserPath: PathItem ={
  patch:{
    summary: "Update a user. Allowed roles ['ADMIN']",
    tags   : [ "User" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "userId",
        in: "path",
        description: "user ID",
        schema: {
          type: "string",
        },
        required: true,
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User:PATCH"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(userSchemas["User:GET"])
          },
        },
        description: "Updated User",
      },
    },
  }
};

const updatePasswordPath: PathItem = {
  patch:{
    summary: "Update user password. Allowed roles ALL (registered)",
    tags:[ "User" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User:Password:PATCH"
          }
        },
      },
      required: true,
    },
    responses:{
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(undefined, "Contraseña actualizada")
          },
        },
        description: "Updated User",
      },
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateEmailPath: PathItem = {
  patch:{
    summary: "Update user email. Allowed roles ALL (registered)",
    tags:[ "User" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User:Email:PATCH"
          }
        },
      },
      required: true,
    },
    responses:{
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(undefined, "Email actualizado")
          },
        },
        description: "Updated User",
      },
    }
  }
};

const deleteUserPath: PathItem = {
  delete:{
    summary: "Delete(soft) a user. Allowed roles ['ADMIN']",
    tags   : [ "User" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "userId",
        in: "path",
        description: "user ID",
        schema: {
          type: "string",
        },
        required: true,
      },
    ],
    responses:{
      200:{
        content:{
          "application/json": {
            schema: successResponseSchema({},"User deleted")
          }
        }
      }
    }
  }
};

const getUserPath = {
  get:{
    summary:"Get a user by id. Allowed roles ['ADMIN']",
    tags: [ "User" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "userId",
        in: "path",
        description: "user ID",
        schema: {
          type: "string",
        },
        required: true,
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(userSchemas["User:GET"])
          },
        },
        description: "Users list",
      },
    },
  }
};

const usersGetPath:PathItem = {
  get:{
    summary:"Get a list of users. Allowed roles ['ADMIN']",
    tags: [ "User" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "s",
        in: "query",
        description: "Search term",
        schema: {
          type: "string",
        },
        required: false,
      },
      {
        name:"role",
        in:"query",
        description: "User role",
        schema:{
          type:"string",
          enum:Object.values(SystemBaseRoles)
        },
        required: false
      },
      {
        name: "isActive",
        in: "query",
        description:"Filter to get active users or not. If no present get all. 0 is false.",
        schema: {
          type: "string",
          enum: [ "0", "1" ]
        }
      },
      {
        name: "page",
        in: "query",
        description:"Page number",
        schema: {
          type: "number",
        }
      },
      {
        name: "limit",
        in: "query",
        description:"Elements per page",
        schema: {
          type: "number",
        }
      },
      {
        name: "orderBy",
        in: "query",
        description:"Attribute to order by, not all allowed.",
        schema: {
          type: "string",
          enum: orders
        }
      },
      {
        name: "sort",
        in: "query",
        description:"asc or desc. By default, it's asc if orderBy is set and sort isn't",
        schema: {
          type: "string",
          enum: [ "asc", "desc" ]
        }
      },
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(paginationSchema("#/components/schemas/User:GET"))
          },
        },
        description: "list of users",
      },
    },
  }
};

const userProfile: PathItem = {
  get:{
    summary:"Get current user profile. Allowed roles ALL (registered and logged)",
    tags: [ "User" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(userSchemas["User:Profile:GET"])
          },
        },
        description: "User profile",
      },
    },
  }
};

export const userPaths = {
  "/user":{ ...authLoginPath, ...usersGetPath },
  "/user/{userId}":{ ...updateUserPath,...deleteUserPath, ...getUserPath },
  "/user/password":{ ...updatePasswordPath },
  "/user/profile": userProfile
};