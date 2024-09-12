import { Request, Response } from "express";
import {
  errorResponse,
  HttpCodes,
  successResponse,
} from "../../../shared/utils";
import { IClassService } from "../services/IClass.service";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al crear la clase",
  DELETE   : "Ocurrió un error al eliminar la clase",
  FETCH    : "Ocurrió un error al obtener las clases",
  NOT_FOUND: "Clase no encontrada",
  UPDATE   : "Ocurrió un error al actualizar la clase",
};

export class ClassController {
  constructor(private readonly _classService: IClassService) {}

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

  public getAllClasses = async (req: Request, res: Response) => {
    try {
      const { page, size } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string
      );
      const classes = await this._classService.getAllClasses(page, size);
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getAllClassesByTeacherIdAndYear = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { page, size } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string
      );
      const { teacherId } = req.params;
      const yearNum = parseInt(req.query.yearNum as string, 10) || 0;

      const classes = await this._classService.getAllClasses(page, size, {
        teacherId,
        year: yearNum !== 0 ? { year: yearNum } : undefined,
      });

      return successResponse({
        data  : classes,
        res,
        status: classes ? HttpCodes.SUCCESS : HttpCodes.SUCCESS_DELETED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getAllClassesBySubjectIdOrYear = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { page, size } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string
      );
      const { subjectId, yearNum = "0" } = req.query;

      const classes = await this._classService.getAllClasses(page, size, {
        subjectId: subjectId as string,
        year:
          parseInt(yearNum as string, 10) !== 0
            ? { year: parseInt(yearNum as string, 10) }
            : undefined,
      });

      if (!classes)
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
        });
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(
        error,
        ERROR_MESSAGES.FETCH,
        res,
        HttpCodes.NOT_FOUND
      );
    }
  };

  public getClassById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const classData = await this._classService.getClassById(id);
      if (!classData) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: classData, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createClass = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const newClass = await this._classService.create(createDto);
      return successResponse({
        data  : newClass,
        res,
        status: HttpCodes.SUCCESS_CREATED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  public updateClass = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateDto = req.body;
      const updatedClass = await this._classService.update(id, updateDto);
      if (!updatedClass) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: updatedClass, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.UPDATE, res);
    }
  };

  public deleteClass = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedClass = await this._classService.delete(id);
      return successResponse({ data: deletedClass, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.DELETE, res);
    }
  };
}
