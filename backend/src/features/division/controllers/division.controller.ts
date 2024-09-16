import { Request, Response } from "express";
import {
  errorResponse,
  HttpCodes,
  successResponse,
} from "../../../shared/utils";
import { IDivisionService } from "../services/IDivision.service";

const ERROR_MESSAGES = {
  CREATE   : "Ocurrió un error al registrar",
  DELETE   : "Ocurrió un error al eliminar",
  FETCH    : "Ocurrió un error al obtener los registros",
  NOT_FOUND: "No se encontró ningun registro",
  UPDATE   : "Ocurrió un error al actualizar",
};

export class DivisionController {
  constructor(private readonly _divisionService: IDivisionService) {}

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

  public getAllDivisions = async (req: Request, res: Response) => {
    try {
      const { page, size } = this.parseQueryParams(
        req.query.page as string,
        req.query.size as string
      );
      const divisions = await this._divisionService.getAllActivities(page, size);
      return successResponse({ data: divisions, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public getDivisionById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const divisionData = await this._divisionService.getDivisionById(id);
      if (!divisionData) 
        return errorResponse({
          message: ERROR_MESSAGES.NOT_FOUND,
          res,
          status : HttpCodes.NOT_FOUND,
        });
      
      return successResponse({ data: divisionData, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.FETCH, res);
    }
  };

  public createDivision = async (req: Request, res: Response) => {
    try {
      const createDto = req.body;
      const newDivision = await this._divisionService.create(createDto);
      return successResponse({
        data  : newDivision,
        res,
        status: HttpCodes.SUCCESS_CREATED,
      });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.CREATE, res);
    }
  };

  /*public deleteDivision = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedDivision = await this._divisionService.delete(id);
      return successResponse({ data: deletedDivision, res });
    } catch (error) {
      return this.handleClassError(error, ERROR_MESSAGES.DELETE, res);
    }
  };*/
}
