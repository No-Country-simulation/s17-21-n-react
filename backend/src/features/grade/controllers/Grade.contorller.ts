import { Request, Response } from "express";    
import { errorResponse, successResponse } from "../../../shared/utils";
import { HttpCodes } from "../../../shared/utils/HTTPCode.utils";
import { IGradeService } from "../services/IGrade.service";

export class GradeController {
    
    private readonly _gradeService: IGradeService;

    constructor(gradeService: IGradeService) {
        this._gradeService = gradeService;
    }

    private handleClassError(
        error: unknown,
        message: string,
        res: Response,
        status?: number
      ) {
        if (error instanceof Error)
          return errorResponse({ res, status, message: error.message });
        return errorResponse({
          res,
          status,
          message: message,
        });
      }
    
    async getAllGrades(req: Request, res: Response) {
        try {
            const { page, size } = req.query;
            const grades = await this._gradeService.getAllGrades( parseInt(page as string), parseInt(size as string));
            successResponse({ data: grades, res, status: HttpCodes.SUCCESS });
        } catch (error) {
            return this.handleClassError(error, "An error occurred while fetching grades", res);
        }
    }
}