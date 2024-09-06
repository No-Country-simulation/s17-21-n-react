import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../shared/utils";
import { HttpCodes } from "../../../shared/utils/HTTPCode.utils";
import { ISubjectService } from "../services/ISubject.service";

export class SubjectController {
  private _subjectService: ISubjectService;

  constructor(subjectServices: ISubjectService) {
    this._subjectService = subjectServices;
  }

  async getAllSubjects(req: Request, res: Response) {
    try {
      const { page = 1, size = 10 } = req.query;
      const subjects = await this._subjectService.getAllSubjects(
        Number(page),
        Number(size)
      );
      successResponse({
        data: subjects,
        message: "Subjects retrieved successfully",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error: Error | any) {
      console.log(error);
      errorResponse({
        message: error.message,
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async getSubjectById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const subject = await this._subjectService.getSubjectById(id);
      successResponse({
        data: subject,
        message: "Subject retrieved successfully",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error: Error | any) {
      console.log(error);
      errorResponse({
        message: error.message,
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async createSubject(req: Request, res: Response) {
    try {
      const { body } = req;
      const subject = await this._subjectService.create(body);
      successResponse({
        data: subject,
        message: "Subject created successfully",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error: Error | any) {
      console.log(error);
      errorResponse({
        message: error.message,
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const subject = await this._subjectService.update(id, body);
      successResponse({
        data: subject,
        message: "Subject updated successfully",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error: Error | any) {
      console.log(error);
      errorResponse({
        message: error.message,
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const subject = await this._subjectService.delete(id);
      successResponse({
        data: subject,
        message: "Subject deleted successfully",
        res,
        status: HttpCodes.SUCCESS,
      });
    } catch (error: Error | any) {
      console.log(error);
      errorResponse({
        message: error.message,
        res,
        status: HttpCodes.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
