import { Request, Response } from "express";
import {
  errorResponse,
  HttpCodes,
  successResponse,
} from "../../../shared/utils";
import { ISubjectCategoryService } from "../services/ISubjectCategory.service";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al registrar la categoría",
  DELETE   : "Ocurrió un error al eliminar la categoría",
  FETCH    : "Ocurrió un error al obtener los registros de categorías",
  NOT_FOUND: "Categoría no encontrada",
  UPDATE   : "Ocurrió un error al actualizar la categoría",
};

export class SubjectCategoryController {
  constructor(private readonly _subjectCategoryService: ISubjectCategoryService) {}

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

  public getAllSubjectCategories = async (req: Request, res: Response) => {
    try {
      const { page, size, filter, sort } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string,
        req.query.name as string,
        req.query.sort as "asc" | "desc" | undefined
      );
      const subjectCategories = await this._subjectCategoryService.getAllSubjectCategories(page, size, filter, sort);
      return successResponse({ data: subjectCategories, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getSubjectCategoryById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const subjectCategoryData = await this._subjectCategoryService.getSubjectCategoryById(id);
      if (!subjectCategoryData) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: subjectCategoryData, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createSubjectCategory = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const newSubjectCategory = await this._subjectCategoryService.create(createDto);
      return successResponse({
        data  : newSubjectCategory,
        res,
        status: HttpCodes.SUCCESS_CREATED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  public updateSubjectCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateDto = req.body;
      const updatedSubjectCategory = await this._subjectCategoryService.update(id, updateDto);
      return successResponse({ data: updatedSubjectCategory, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.UPDATE, res);
    }
  };

  /*public deleteSubjectCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedSubjectCategory = await this._subjectCategoryService.delete(id);
      return successResponse({ data: deletedSubjectCategory, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.DELETE, res);
    }
  };*/
}
