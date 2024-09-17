import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, paginationSchema, successResponseSchema } from "../responses.swagger";
import { EnrollmentSchema } from "./schemas.swagger";
const createEnrollmentPath: PathItem = {
  post: {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Enrollment:POST"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(EnrollmentSchema, "Enrollment created successfully"),
          },
        },
        description: "Created Enrollment",
      },
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    summary: "Create a new enrollment. Just for 'ADMIN'",
    tags   : [ "Enrollment" ],
  }
};

const updateEnrollmentPath: PathItem = {
  patch: {
    parameters: [
      {
        description: "Id de la matrícula",
        example    : "27d8dafa-8207-4878-bed8-9af291563df7",
        in         : "path",
        name       : "enrollmentId",
        schema     : {
          type: "string"
        }
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Enrollment:PATCH"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(EnrollmentSchema, "Enrollment updated successfully"),
          },
        },
        description: "Enrollment updated successfully, enrollment data returned",
      },
      ...defaultErrorResponseSchemas()
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    summary: "Update a enrollment. Just for 'ADMIN'",
    tags   : [ "Enrollment" ],
  },
};

const findManyEnrollmentPath: PathItem = {
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
        description: "Id del estudiante",
        example    : "27d8dafa-8207-4878-bed8-9af291563df7",
        in         : "query",
        name       : "studentId",
        schema     : {
          type: "string"
        }
      },
      {
        description: "Año académico",
        example    : "2024",
        in         : "query",
        name       : "year",
        schema     : {
          type: "number"
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
            schema: successResponseSchema(paginationSchema(EnrollmentSchema)),
          },
        },
        description: "Enrollments found successfully, enrollments data returned",
      },
      ...defaultErrorResponseSchemas()
    },
    summary: "Find many enrollments.",
    tags   : [ "Enrollment" ],
  },
};

export const enrollmentPaths = {
  "/enrollment"               : createEnrollmentPath,
  "/enrollment/all"           : findManyEnrollmentPath,
  "/enrollment/{enrollmentId}": {
    ...updateEnrollmentPath
  }
};