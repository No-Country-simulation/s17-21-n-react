import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";
import { IEnrollmentService } from "../services/IEnrollment.service";
import { Request, Response } from "express";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al registrar",
  DELETE   : "Ocurrió un error al eliminar",
  FETCH    : "Ocurrió un error al obtener los registros",
  NOT_FOUND: "No se encontró ningun registro",
  UPDATE   : "Ocurrió un error al actualizar",
};

export class EnrollmentController {
  private readonly _enrollmentService: IEnrollmentService;

  constructor(enrollmentService: IEnrollmentService) {
    this._enrollmentService = enrollmentService;
  }

  private handleClassError = (
    error: unknown,
    message: string,
    res: Response,
    status: number = HttpCodes.INTERNAL_SERVER_ERROR
  ) => {
    const errorMessage = error instanceof Error ? error.message : message;
    return errorResponse({ message: errorMessage, res, status });
  };

  async getAllEnrollments(req: Request, res: Response) {
    try {
      const { page, size } = req.query;
      const enrollments = await this._enrollmentService.getAllEnrollments(
        parseInt(page as string),
        parseInt(size as string)
      );
      return successResponse({ data: enrollments, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  }

  async getEnrollmentsByStudentAndYear(req: Request, res: Response) {
    try {
      const { page, size } = req.query;
      const { studentId } = req.params;
      const year = parseInt(req.query.year as string);
      const filter: any = { studentId };
      if (!isNaN(year)) 
        filter.year = year;
      
      const enrollments = await this._enrollmentService.getAllEnrollments(
        parseInt(page as string),
        parseInt(size as string),
        filter
      );
      if (!enrollments) 
        return successResponse({ data: enrollments, res ,status: HttpCodes.SUCCESS_DELETED });
      
      return successResponse({ data: enrollments, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  }
    
  async getEnrollmentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const enrollment = await this._enrollmentService.getEnrollmentById(id);
      if(!enrollment) 
        return errorResponse({ message: "Enrollment not found", res, status: HttpCodes.NOT_FOUND });
      return successResponse({ data: enrollment, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  }

  async createEnrollment(req:Request, res: Response) {
    try {
      const enrollment = await this._enrollmentService.create(req.body);
      return successResponse({ data: enrollment, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);  
    }
  }

  async updateEnrollment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const enrollment = await this._enrollmentService.update(id, req.body);
      if(!enrollment) 
        return errorResponse({ message: "Enrollment not found", res, status: HttpCodes.NOT_FOUND });
      
      return successResponse({ data: enrollment, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  }
}