import { Request, Response } from "express";
import {
  errorResponse,
  HttpCodes,
  successResponse,
} from "../../../shared/utils";
import { IAcademicYearService } from "../services/IAcademicYear.service";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al registrar el año académico",
  DELETE   : "Ocurrió un error al eliminar el registro de año académico",
  FETCH    : "Ocurrió un error al obtener los años académicos",
  NOT_FOUND: "Año no encontrada",
  UPDATE   : "Ocurrió un error al actualizar el año académico",
};

export class AcademicYearController {
  constructor(private readonly _academicYearService: IAcademicYearService) {}

  private handleClassError = (
    error: unknown,
    message: string,
    res: Response,
    status: number = HttpCodes.INTERNAL_SERVER_ERROR
  ) => {
    const errorMessage = error instanceof Error ? error.message : message;
    return errorResponse({ message: errorMessage, res, status });
  };

  private parseQueryParams = (page?: string, size?: string) => ({
    page: page ? parseInt(page, 10) : 1,
    size: size ? parseInt(size, 10) : 10,
  });

  public getAllAcademicYears = async (req: Request, res: Response) => {
    try {
      const { page, size } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string
      );
      const academicYears = await this._academicYearService.getAllAcademicYears(page, size);
      return successResponse({ data: academicYears, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getAcademicYearById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const academicYearData = await this._academicYearService.getAcademicYearById(id);
      if (!academicYearData) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: academicYearData, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createAcademicYear = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const newAcademicYear = await this._academicYearService.create(createDto);
      return successResponse({
        data  : newAcademicYear,
        res,
        status: HttpCodes.SUCCESS_CREATED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  /*public deleteAcademicYear = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedAcademicYear = await this._academicYearService.delete(id);
      return successResponse({ data: deletedAcademicYear, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.DELETE, res);
    }
  };*/
}
