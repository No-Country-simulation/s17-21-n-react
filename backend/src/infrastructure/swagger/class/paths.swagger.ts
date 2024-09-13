/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { PathItem } from "swagger-jsdoc";
import { paginationSchema, successResponseSchema } from "../responses.swagger";
import { classSchemas } from "./schemas.swagger";

const createClassPath: PathItem = {
  post: {
    summary: "Create a new class. Just for 'ADMIN' or 'TEACHER'",
    tags: [ "Class" ],
    security: [
      {
        bearerAuth: []
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Class:POST"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(classSchemas["Class:GET"])
          },
        },
        description: "Created Class",
      },
    },
  }
};

const updateClassPath: PathItem ={
  patch:{
    summary: "Update a class. Allowed roles 'ADMIN' or 'TEACHER'",
    tags   : [ "Class" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "classId",
        in: "path",
        description: "class ID",
        schema: {
          type: "string",
          format: "uuid",
        },
        required: true,
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Class:PATCH"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(classSchemas["Class:GET"])
          },
        },
        description: "Updated Class",
      },
    },
  }
};

const deleteClassPath: PathItem = {
  delete:{
    summary: "Delete(soft) a class. Allowed roles 'ADMIN' or 'TEACHER'",
    tags   : [ "Class" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "classId",
        in: "path",
        description: "class ID",
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
            schema: successResponseSchema({},"Class deleted")
          }
        }
      }
    }
  }
};

const getClassPath: PathItem = {
  get:{
    summary:"Get a class by id. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Class" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "classId",
        in: "path",
        description: "class ID",
        schema: {
          type: "string",
          format: "uuid",
        },
        required: true,
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(classSchemas["Class:GET"])
          },
        },
        description: "Class",
      },
    },
  }
};

const getAllClassesByTeacherIdAndYearPath: PathItem = {
  get:{
    summary: "Get a list of classes by teacher id and year. Allowed roles 'ADMIN' or 'TEACHER'",
    tags: [ "Class" ],
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: "teacherId",
        in: "path",
        description: "Teacher ID",
        schema: {
          type: "string",
          format: "uuid",
        },
        required: true,
      },
      {
        name: "yearNum",
        in: "query",
        description: "Year number",
        schema: {
          type: "number",
        },
        required: false,
      }
    ],

    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(paginationSchema("#/components/schemas/Class:GET"))
          },
        },
        description: "List of classes",
      },
    },
  }
};

const classesGetPath:PathItem = {
  get:{
    summary:"Get a list of classes. Allowed roles ['ADMIN', 'TEACHER', 'STUDENT']",
    tags: [ "Class" ],
    security:[
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "name",
        in: "query",
        description: "Search term",
        schema: {
          type: "string",
        },
        required: false,
      },
      {
        name:"subjectId",
        in:"query",
        description: "Subject id",
        schema:{
          type:"string",
        },
        required: false
      },
      {
        name: "yearId",
        in: "query",
        description:"Year id",
        schema: {
          type: "string",
        },
        required: false
      },
      {
        name: "divisionId",
        in: "query",
        description:"Division id",
        schema: {
          type: "string",
        },
        required: false
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
        name: "size",
        in: "query",
        description:"Elements per page",
        schema: {
          type: "number",
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
            schema: successResponseSchema(paginationSchema("#/components/schemas/Class:GET"))
          },
        },
        description: "list of classes",
      },
    },
  }
};

export const classPaths = {
  "/class":{ ...createClassPath, ...classesGetPath },
  "/class/{classId}":{ ...updateClassPath,...deleteClassPath, ...getClassPath },
  "/class/teacher/{teacherId}":{ ...getAllClassesByTeacherIdAndYearPath },
};