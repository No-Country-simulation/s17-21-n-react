/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Schema } from "swagger-jsdoc";
import { pickKeys } from "../../../shared/utils";

export const AttendanceSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID de la asistencia general",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    classId: {
      type: "string",
      description: "ID de la class",
      example: "27d8dafa-8207-4878-bed8-9af291563df7"
    },
    status: {
      type: "string",
      description: "Estado de la asistencia general ('DOING', 'FINISHED', 'PENDING')",
      example: "DOING"
    },
    eventDate: {
      type: "date",
      description: "Fecha de asistencia general",
      example: "2024-10-27T00:00:00.000Z"
    }
  }
};


export const UpdateAttendanceSchema: Schema = {
  type: "object",
  properties: {
    ...pickKeys(AttendanceSchema["properties"], [ "status" ])
  }
};

export const attendanceSchemas = {
  "Attendance:GET": AttendanceSchema,
  "Attendance:PATCH": UpdateAttendanceSchema
};