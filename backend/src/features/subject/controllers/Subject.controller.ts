import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../shared/utils";
import { HttpCodes } from "../../../shared/utils/HTTPCode.utils";
import { ISubjectService } from "../services/ISubject.service";

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

  private parseQueryParams = (page?: string, size?: string) => ({
    page: page ? parseInt(page, 10) : 1,
    size: size ? parseInt(size, 10) : 10,
  });

  private ERROR_MESSAGES = {
    CREATE   : "Ocurrió un error al crear la asignatura",
    DELETE   : "Ocurrió un error al eliminar la asignatura",
    FETCH    : "Ocurrió un error al obtener la asignatura",
    NOT_FOUND: "Asignatura no encontrada",
    UPDATE   : "Ocurrió un error al actualizar la asignatura",
  };

  public getAllSubjects = async (req: Request, res: Response): Promise<void> => {
    try {
      const { page, size } = this.parseQueryParams(req.query.page as string, req.query.size as string);
      if (!req.user) throw new Error("Usuario no autenticado");
      const subjects = await this._subjectService.getAllSubjects(page, size, req.user);
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
      const subject = await this._subjectService.create(req.body);
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
