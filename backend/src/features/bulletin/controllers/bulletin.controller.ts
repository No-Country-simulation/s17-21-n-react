import { Request, Response } from "express";
import { CreateBulletinDto, FindManyBulletinDto, UpdateBulletinDto } from "../dtos";
import { BulletinService } from "../services";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";

export class BulletinController {
  constructor(private bulletinService: BulletinService) {}
  
  async create(req: Request, res: Response) {
    try {
      const data: CreateBulletinDto = req.body;

      const bulletin = await this.bulletinService.create(data);
      
      return successResponse({
        data   : bulletin,
        message: "Bulletin created successfully",
        res,
        status : HttpCodes.SUCCESS_CREATED
      });
    } catch (error) {
      if (error instanceof Error) return errorResponse({
        message: error.message,
        res,
        status : HttpCodes.BAD_REQUEST
      });

      return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data: UpdateBulletinDto = req.body;
      const { id } = req.params;

      const bulletin = await this.bulletinService.update(id, data);
      
      return successResponse({
        data   : bulletin,
        message: "Bulletin updated successfully",
        res,
        status : HttpCodes.SUCCESS
      });
    } catch (error) {
      if (error instanceof Error) return errorResponse({
        message: error.message,
        res,
        status : HttpCodes.BAD_REQUEST
      });

      return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await this.bulletinService.delete(id);
      
      return successResponse({
        res,
        status: HttpCodes.SUCCESS_DELETED
      });
    } catch (error) {
      if (error instanceof Error) return errorResponse({
        message: error.message,
        res,
        status : HttpCodes.BAD_REQUEST
      });

      return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async findUnique(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const bulletin = await this.bulletinService.findUnique(id);
      
      return successResponse({
        data  : bulletin,
        res,
        status: HttpCodes.SUCCESS
      });
    } catch (error) {
      if (error instanceof Error) return errorResponse({
        message: error.message,
        res,
        status : HttpCodes.BAD_REQUEST
      });

      return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async findMany(req: Request, res: Response) {
    try {
      const data = req.query as unknown as FindManyBulletinDto;

      const bulletins = await this.bulletinService.findMany(data);
      
      return successResponse({
        data  : bulletins,
        res,
        status: HttpCodes.SUCCESS
      });
    } catch (error) {
      if (error instanceof Error) return errorResponse({
        message: error.message,
        res,
        status : HttpCodes.BAD_REQUEST
      });

      return errorResponse({ res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }
}