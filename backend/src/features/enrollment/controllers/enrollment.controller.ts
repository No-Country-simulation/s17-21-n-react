import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";
import { IEnrollmentService } from "../services/IEnrollment.service";
import { Request, Response } from "express";

export class EnrollmentController {
    private readonly _enrollmentService: IEnrollmentService;

    constructor(enrollmentService: IEnrollmentService) {
      this._enrollmentService = enrollmentService;
    }

  async getAllEnrollments(req: Request, res: Response) {
    try {
      const { page, size } = req.query;
      const enrollments = await this._enrollmentService.getAllEnrollments(
        parseInt(page as string),
        parseInt(size as string)
      );
      return successResponse({data: enrollments, res})
    } catch (error) {
      return errorResponse({message: "An error ocurred while fetching enrollments ",res, status: HttpCodes.INTERNAL_SERVER_ERROR});
    }
  }
    
  async getEnrollmentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const enrollment = await this._enrollmentService.getEnrollmentById(id);
      if(!enrollment) {
        return errorResponse({message: "Enrollment not found", res, status: HttpCodes.NOT_FOUND});
      }
      return successResponse({data: enrollment, res});
    } catch (error) {
      return errorResponse({message: "An error ocurred while fetching enrollments", res});
    }
  }

  async createEnrollment(req:Request, res: Response) {
    try {
      const enrollment = await this._enrollmentService.create(req.body);
      return successResponse({data: enrollment, res});
    } catch (error) {
      return errorResponse({message: "An error ocurred while creating enrollment", res, status: HttpCodes.INTERNAL_SERVER_ERROR});
    }
  }

  async updateEnrollment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const enrollment = await this._enrollmentService.update(id, req.body);
      if(!enrollment) {
        return errorResponse({message: "Enrollment not found", res, status: HttpCodes.NOT_FOUND});
      }
      return successResponse({data: enrollment, res});
    } catch (error) {
      return errorResponse({message: "An error ocurred while updating enrollment", res, status: HttpCodes.INTERNAL_SERVER_ERROR});
    }
  }
}