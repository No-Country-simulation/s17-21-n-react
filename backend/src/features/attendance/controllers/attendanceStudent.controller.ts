import { Request, Response } from "express";
import { UpdateAttendanceStudentDto } from "../dtos";
import { AttendanceStudentService } from "../services";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";

interface HandleErrorArgs {
  error: unknown;
  res: Response;
}

export class AttendanceStudentController {
  constructor(private attendanceStudentService: AttendanceStudentService) {}
  
  private handleError({ error, res }: HandleErrorArgs) {
    if (error instanceof Error) return errorResponse({
      message: error.message,
      res,
      status : HttpCodes.BAD_REQUEST
    });

    return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.query as unknown as UpdateAttendanceStudentDto;

      const attendance = await this.attendanceStudentService.update(id, data);
      
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