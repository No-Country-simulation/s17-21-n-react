import { Request, Response } from "express";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";
import { IGradeService } from "../services/IGrade.service";

const ERROR_MESSAGES = {
  FETCH: "Ocurrió un error al obtener el grado",
  CREATE: "Ocurrió un error al crear el grado",
  UPDATE: "Ocurrió un error al actualizar el grado",
  DELETE: "Ocurrió un error al eliminar el grado",
  NOT_FOUND: "Grado no encontrado",
};

export class GradeController {

  constructor(private readonly _gradeService: IGradeService) {}

  private handleGradeError = (
    error: unknown,
    message: string,
    res: Response,
    status: number = HttpCodes.INTERNAL_SERVER_ERROR
  ) => {
    const errorMessage = error instanceof Error ? error.message : message;
    return errorResponse({ res, status, message: errorMessage });
  };

  private parseQueryParams = (page?: string, size?: string) => ({
    page: page ? parseInt(page, 10) : 1,
    size: size ? parseInt(size, 10) : 10,
  });

  public getAllGrades = async (req: Request, res: Response) => {
    try {
      const { page, size } = this.parseQueryParams(req.query.page as string, req.query.size as string);
      const grades = await this._gradeService.getAllGrades(page, size);
      return successResponse({ data: grades, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      return this.handleGradeError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getGradeById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const grade = await this._gradeService.getGradeById(id);
      if (!grade) {
        return errorResponse({
          res,
          status: HttpCodes.NOT_FOUND,
          message: ERROR_MESSAGES.NOT_FOUND
        });
      }
      return successResponse({ data: grade, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      return this.handleGradeError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createGrade = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const grade = await this._gradeService.create(createDto);
      return successResponse({ data: grade, res, status: HttpCodes.SUCCESS_CREATED });
    } catch (error) {
      return this.handleGradeError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  public updateGrade = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateDto = req.body;
      const grade = await this._gradeService.update(id, updateDto);
      return successResponse({ data: grade, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      return this.handleGradeError(error, ERROR_MESSAGES.UPDATE, res);
    }
  };

  public deleteGrade = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const grade = await this._gradeService.delete(id);
      return successResponse({ data: grade, res, status: HttpCodes.SUCCESS_DELETED });
    } catch (error) {
      return this.handleGradeError(error, ERROR_MESSAGES.DELETE, res);
    }
  };
}
