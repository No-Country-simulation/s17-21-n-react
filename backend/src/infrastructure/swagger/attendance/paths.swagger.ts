/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, successResponseSchema } from "../responses.swagger";
import { AttendanceSchema } from "./schemas.swagger";
import { AttendanceStudentSchema } from "../attendanceStudent";



const updateAttendancePath: PathItem = {
  patch: {
    summary: "Update a attendance. Just for 'ADMIN' or 'TEACHER'",
    tags   : [ "Attendance" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "attendanceId",
        in: "path",
        description: "Id del attendance",
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
            $ref: "#/components/schemas/Attendance:PATCH"
          }
        },
      },
      required: true,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema(AttendanceSchema),
          },
        },
        description: "Attendance updated successfully, attendance data returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

const getSertAttendancePath: PathItem = {
  get: {
    summary: "Find or create attendance by day. Just for 'ADMIN' or 'TEACHER'",
    tags   : [ "Attendance" ],
    security: [
      {
        bearerAuth:[]
      }
    ],
    parameters: [
      {
        name: "eventDate",
        in: "query",
        description: "Fecha de la asistencia(DD-MM-AAAA)",
        schema: {
          type: "string"
        },
        example: "27-10-2024"
      },
      {
        name: "classId",
        in: "query",
        description: "Id de la clase",
        schema: {
          type: "string"
        },
        example: "27d8dafa-8207-4878-bed8-9af291563df7"
      }
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: successResponseSchema({
              type: "object",
              properties: {
                ...AttendanceSchema["properties"],
                attendanceStudents: {
                  type: "array",
                  items: AttendanceStudentSchema
                }
              }
            }),
          },
        },
        description: "Attendance fined successfully, attendance with attendanceStudents returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

export const attendancePaths = {
  "/attendance/{attendanceId}": updateAttendancePath,
  "/attendance/all": getSertAttendancePath
};