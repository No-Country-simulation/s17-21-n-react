import { Request, Response } from "express";
import {
  errorResponse,
  HttpCodes,
  successResponse,
} from "../../../shared/utils";
import { IActivityService } from "../services/IActivity.service";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al registrar la actividad",
  DELETE   : "Ocurrió un error al eliminar la actividad",
  FETCH    : "Ocurrió un error al obtener las actividades",
  NOT_FOUND: "Actividad no encontrada",
  UPDATE   : "Ocurrió un error al actualizar la actividad",
};

export class ActivityController {
  constructor(private readonly _activityService: IActivityService) {}

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

  public getAllActivities = async (req: Request, res: Response) => {
    try {
      const { page, size } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string
      );
      const activities = await this._activityService.getAllActivities(page, size);
      return successResponse({ data: activities, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getActivityById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const activityData = await this._activityService.getActivityById(id);
      if (!activityData) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: activityData, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createActivity = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const newActivity = await this._activityService.create(createDto);
      return successResponse({
        data  : newActivity,
        res,
        status: HttpCodes.SUCCESS_CREATED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  /*public deleteActivity = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedActivity = await this._activityService.delete(id);
      return successResponse({ data: deletedActivity, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.DELETE, res);
    }
  };*/
}
