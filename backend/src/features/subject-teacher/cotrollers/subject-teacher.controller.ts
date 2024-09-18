import { Request, Response } from "express";
import {
  errorResponse,
  HttpCodes,
  successResponse,
} from "../../../shared/utils";
import { ISubjectTeacherService } from "../services/ISubjectTeacher.service";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al registrar la categoría",
  DELETE   : "Ocurrió un error al eliminar la categoría",
  FETCH    : "Ocurrió un error al obtener los registros de categorías",
  NOT_FOUND: "Categoría no encontrada",
  UPDATE   : "Ocurrió un error al actualizar la categoría",
};

export class SubjectTeacherController {
  constructor(private readonly _subjectTeacherService: ISubjectTeacherService) {}

  private handleClassError = (
    error: unknown,
    message: string,
    res: Response,
    status: number = HttpCodes.INTERNAL_SERVER_ERROR
  ) => {
    const errorMessage = error instanceof Error ? error.message : message;
    return errorResponse({ message: errorMessage, res, status });
  };

  private parseQueryParams = (page?: string, size?: string, filter?: string, sort?: string) => ({
    filter: filter ? { name: { contains: filter } } : undefined,
    page  : page ? parseInt(page, 10) : 1,
    size  : size ? parseInt(size, 10) : 10,
    sort  : sort ? { name: sort as "asc" | "desc" } : undefined,
  });

  public getAllSubjectTeachers = async (req: Request, res: Response) => {
    try {
      const { page, size, filter, sort } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string,
        req.query.name as string,
        req.query.sort as "asc" | "desc" | undefined
      );
      const subjectTeachers = await this._subjectTeacherService.getAllSubjectTeachers(page, size, filter, sort);
      return successResponse({ data: subjectTeachers, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getSubjectTeacherById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const subjectTeacherData = await this._subjectTeacherService.getSubjectTeacherById(id);
      if (!subjectTeacherData) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: subjectTeacherData, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createSubjectTeacher = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const newSubjectTeacher = await this._subjectTeacherService.create(createDto);
      return successResponse({
        data  : newSubjectTeacher,
        res,
        status: HttpCodes.SUCCESS_CREATED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  public updateSubjectTeacher = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateDto = req.body;
      const updatedSubjectTeacher = await this._subjectTeacherService.update(id, updateDto);
      return successResponse({ data: updatedSubjectTeacher, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.UPDATE, res);
    }
  };

  /*public deleteSubjectTeacher = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedSubjectTeacher = await this._subjectTeacherService.delete(id);
      return successResponse({ data: deletedSubjectTeacher, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.DELETE, res);
    }
  };*/
}