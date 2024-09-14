import { Request, Response } from "express";
import { GetSertAttendanceDto, UpdateAttendanceDto } from "../dtos";
import { AttendanceService } from "../services";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";

interface HandleErrorArgs {
  error: unknown;
  res: Response;
}

export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}
  
  private handleError({ error, res }: HandleErrorArgs) {
    if (error instanceof Error) return errorResponse({
      message: error.message,
      res,
      status : HttpCodes.BAD_REQUEST
    });

    return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
  }

  async getSert(req: Request, res: Response) {
    try {
      const data = req.query as unknown as GetSertAttendanceDto;

      const attendanceStudents = await this.attendanceService.getSert(data);
      
      return successResponse({
        data  : attendanceStudents,
        res,
        status: HttpCodes.SUCCESS
      });
    } catch (error) {
      return this.handleError({ error, res });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.query as unknown as UpdateAttendanceDto;

      const attendance = await this.attendanceService.update(id, data);
      
      return successResponse({
        data  : attendance,
        res,
        status: HttpCodes.SUCCESS
      });
    } catch (error) {
      return this.handleError({ error, res });
    }
  }
}