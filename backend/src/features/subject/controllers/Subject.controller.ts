import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../shared/utils";
import { HttpCodes } from "../../../shared/utils/HTTPCode.utils";
import { ISubjectService } from "../services/ISubject.service";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";
import { SubjectCreate } from "../dto/subjectCreate.dto";

export class SubjectController {
  private _subjectService: ISubjectService;

  constructor(subjectServices: ISubjectService) {
    this._subjectService = subjectServices;
  }

  private handleSubjectError = (
    error: unknown,
    message: string,
    res: Response,
    status: number = HttpCodes.INTERNAL_SERVER_ERROR
  ) => {
    const errorMessage = error instanceof Error ? error.message : message;
    return errorResponse({ message: errorMessage, res, status });
  };

  private ERROR_MESSAGES = {
    CREATE   : "Ocurrió un error al crear la asignatura",
    DELETE   : "Ocurrió un error al eliminar la asignatura",
    FETCH    : "Ocurrió un error al obtener la asignatura",
    NOT_FOUND: "Asignatura no encontrada",
    UPDATE   : "Ocurrió un error al actualizar la asignatura",
  };

  private parseQueryParams = (query: Request["query"]) => {
    const { page, size, sort, name, divisionId } = query;
    const filter: FindSubjectOptions = {};
    
    if (typeof name === "string") 
      filter.name = { contains: name, mode: "insensitive" };
    
    if (typeof divisionId === "string") filter.divisionId = divisionId;
    return {
      filter,
      page: page ? parseInt(page as string, 10) : 1,
      size: size ? parseInt(size as string, 10) : 10,
      sort: sort ? { name: sort as "asc" | "desc" } : undefined,
    };
  };

  public getAllSubjects = async (req: Request, res: Response): Promise<void> => {
    try {
      const { page, size, filter, sort } = this.parseQueryParams(req.query);
      const subjects = await this._subjectService.getAllSubjects(page, size, filter, sort);
      successResponse({
        data   : subjects,
        message: "Asignaturas recuperadas exitosamente",
        res,
        status : HttpCodes.SUCCESS,
      });
    } catch (error) {
      this.handleSubjectError(error, this.ERROR_MESSAGES.FETCH, res);
    }
  };

  public getSubjectById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const subject = await this._subjectService.getSubjectById(id);
      if (!subject) {
        errorResponse({
          message: this.ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
        return;
      } 
      successResponse({
        data   : subject,
        message: "Asignatura recuperada exitosamente",
        res,
        status : HttpCodes.SUCCESS,
      });
    } catch (error) {
      this.handleSubjectError(error, this.ERROR_MESSAGES.FETCH, res);
    }
  };
  
  public createSubject = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body as SubjectCreate;
      console.log(data);
      const subject = await this._subjectService.create(data);
      successResponse({
        data   : subject,
        message: "Asignatura creada exitosamente",
        res,
        status : HttpCodes.SUCCESS,
      });
    } catch (error) {
      this.handleSubjectError(error, this.ERROR_MESSAGES.CREATE, res);
    }
  };

  public updateSubject = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const subject = req.body;
      const updatedSubject = await this._subjectService.update(id, subject);
      if (!updatedSubject) {
        errorResponse({
          message: this.ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
        return;
      } 
      successResponse({
        data   : updatedSubject,
        message: "Asignatura actualizada exitosamente",
        res,
        status : HttpCodes.SUCCESS,
      });
    } catch (error) {
      this.handleSubjectError(error, this.ERROR_MESSAGES.UPDATE, res);
    }
  };

  public deleteSubject = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await this._subjectService.delete(id);
      successResponse({
        message: "Asignatura eliminada exitosamente",
        res,
        status : HttpCodes.SUCCESS,
      });
    } catch (error) {
      this.handleSubjectError(error, this.ERROR_MESSAGES.DELETE, res);
    }
  };
}
