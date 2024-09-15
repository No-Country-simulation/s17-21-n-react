/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { PathItem } from "swagger-jsdoc";
import { defaultErrorResponseSchemas, succesResponseSchema } from "../responses.swagger";
import { AttendanceStudentSchema } from "./schemas.swagger";

const updateAttendanceStudentPath: PathItem = {
  patch: {
    summary: "Update a attednace. Just for 'ADMIN' or 'TEACHER'",
    tags   : [ "AttendanceStudent" ],
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
            schema: succesResponseSchema(AttendanceStudentSchema),
          },
        },
        description: "Attendance Student updated successfully, attendance Student data returned",
      },
      ...defaultErrorResponseSchemas()
    },
  },
};

export const attendanceStudentPaths = {
  "/attendanceStudent/{attendanceStudentId}": updateAttendanceStudentPath
};