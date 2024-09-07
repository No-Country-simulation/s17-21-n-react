import { errorResponse, successResponse } from "../../../shared/utils";
import { IClassService } from "../services/IClass.service";
import { Request, Response } from "express";

export class ClassController {
  private readonly _classService: IClassService;

  constructor(classService: IClassService) {
    this._classService = classService;
  }

  private handleClassError(error: unknown, message: string, res: Response) {
    if (error instanceof Error)
      return errorResponse({ message: error.message, res });
    return errorResponse({
      message: message,
      res,
    });
  }

  async getAllClasses(req: Request, res: Response) {
    try {
      const { page, size } = req.query;
      const classes = await this._classService.getAllClasses(
        parseInt(page as string),
        parseInt(size as string)
      );
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while fetching classes",
        res
      );
    }
  }

  async getClassById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const classes = await this._classService.getClassById(id);
      if (!classes) {
        return errorResponse({
          message: "Class not found",
          res,
          status: 404,
        });
      }
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while fetching class",
        res
      );
    }
  }

  async createClass(req: Request, res: Response) {
    try {
      const createDto = req.body;
      const classes = await this._classService.create(createDto);
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while creating class",
        res
      );
    }
  }

  async updateClass(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateDto = req.body;
      const classes = await this._classService.update(id, updateDto);
      if (!classes) {
        return errorResponse({
          message: "Class not found",
          res,
          status: 404,
        });
      }
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while updating class",
        res
      );
    }
  }

  async deleteClass(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const classes = await this._classService.delete(id);
      return successResponse({ data: classes, res });
    } catch (error) {
      return this.handleClassError(
        error,
        "An error occurred while deleting class",
        res
      );
    }
  }
  
}
