/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";
import { pickKeys } from "../../../shared/utils";

export const AttendanceStudentSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID de la asistencia del estudiente",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    studentId: {
      type: "string",
      description: "ID de la student",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    student: {
      type: "object",
      properties: {
        email: {
          type: "string",
          format: "email",
          description: "Correo electrónico del estudiante",
          example: "user@example.com"
        },
        name: {
          type: "string",
          description: "Nombre del estudiante",
          example: "John"
        },
        last_name: {
          type: "string",
          description: "Apellido del estudiante",
          example: "Doe"
        }, 
      }
    },
    attendanceId: {
      type: "string",
      description: "ID de la attendance",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    status: {
      type: "string",
      description: "Estado de la asistencia general ('ABSENT', 'PRESENT', 'LATE')",
      example: "PRESENT"
    },
    observation: {
      type: "string",
      description: "Observation or comments",
      example: "LLegó tarde, pero lo justificó"
    },
  }
};


export const UpdateAttendanceStudentSchema: Schema = {
  type: "object",
  properties: {
    ...pickKeys(AttendanceStudentSchema["properties"], [ "status" ])
  }
};

export const attendanceStudentSchemas = {
  "AttendanceStudent:GET": AttendanceStudentSchema,
  "AttendanceStudent:PATCH": UpdateAttendanceStudentSchema
};