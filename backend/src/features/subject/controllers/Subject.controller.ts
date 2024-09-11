import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../shared/utils";
import { HttpCodes } from "../../../shared/utils/HTTPCode.utils";
import { ISubjectService } from "../services/ISubject.service";

export class SubjectController {
  private _subjectService: ISubjectService;

  constructor(subjectServices: ISubjectService) {
    this._subjectService = subjectServices;
  }

  public getAllSubjects = async (req: Request, res: Response): Promise<void> => {
    try {
      const { page = '1', size = '10' } = req.query;
      const subjects = await this._subjectService.getAllSubjects(
        parseInt(page as string),
        parseInt(size as string)
      );
      successResponse({
        data: subjects,
        message: "Asignaturas recuperadas exitosamente",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error) {
      errorResponse({
        message: "Ocurrió un error al recuperar las asignaturas",
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  public getSubjectById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const subject = await this._subjectService.getSubjectById(id);
      if (!subject) {
        errorResponse({
          message: "Asignatura no encontrada",
          res,
          status: HttpCodes.NOT_FOUND,
        });
        return
      } 
        successResponse({
          data: subject,
          message: "Asignatura recuperada exitosamente",
          res,
          status: HttpCodes.SUCCESS,
        });
    } catch (error) {
      errorResponse({
        message: "Ocurrió un error al recuperar la asignatura",
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }
  
  public createSubject = async (req: Request, res: Response): Promise<void> => {
    try {
      const subject = await this._subjectService.create(req.body);
      successResponse({
        data: subject,
        message: "Asignatura creada exitosamente",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error) {
      errorResponse({
        message: "Ocurrió un error al crear la asignatura",
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  public updateSubject = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const subject = req.body;
      const updatedSubject = await this._subjectService.update(id, subject);
      if (!updatedSubject) {
         errorResponse({
          message: "Asignatura no encontrada",
          res,
          status: HttpCodes.NOT_FOUND,
        });
        return
      } 
        successResponse({
          data: updatedSubject,
          message: "Asignatura actualizada exitosamente",
          res,
          status: HttpCodes.SUCCESS,
      });
    } catch (error) {
      errorResponse({
        message: "Ocurrió un error al actualizar la asignatura",
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  public deleteSubject = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await this._subjectService.delete(id);
      successResponse({
        message: "Asignatura eliminada exitosamente",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error) {
      errorResponse({
        message: "Ocurrió un error al eliminar la asignatura",
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
