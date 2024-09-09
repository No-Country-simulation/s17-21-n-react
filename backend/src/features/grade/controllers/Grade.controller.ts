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
      const grades = await this._gradeService.getAllGrades(
        parseInt(page as string) || 1,
        parseInt(size as string) || 10
      );
      successResponse({ data: grades, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      console.log(error);
      return this.handleClassError(
        error,
        "An error occurred while fetching grades",
        res
      );
    }
  }

  async getGradeById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const grade = await this._gradeService.getGradeById(id);
      if (!grade) {
        return successResponse({
          data: grade,
          res,
          status: HttpCodes.SUCCESS_DELETED,
        });
      }
      successResponse({ data: grade, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while fetching grade",
        res
      );
    }
  }

  async createGrade(req: Request, res: Response) {
    try {
      const createDto = req.body;
      const grade = await this._gradeService.create(createDto);
      successResponse({ data: grade, res, status: HttpCodes.SUCCESS_CREATED });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while creating grade",
        res
      );
    }
  }

  async updateGrade(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateDto = req.body;
      const grade = await this._gradeService.update(id, updateDto);
      successResponse({ data: grade, res, status: HttpCodes.SUCCESS_CREATED });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while updating grade",
        res
      );
    }
  }

  async deleteGrade(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const grade = await this._gradeService.delete(id);
      successResponse({ data: grade, res, status: HttpCodes.SUCCESS_DELETED });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while deleting grade",
        res
      );
    }
  }
}
