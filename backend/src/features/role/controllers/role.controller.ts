import { Request, Response } from "express";
import { RoleService } from "../services/role.service";
import { RegisterRolDto } from "../dtos/create.dto";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";

export class RoleController {
  constructor(private roleService: RoleService) {}

  async create(req: Request, res: Response) {
    try {
      const createDto: RegisterRolDto = req.body;
      const result = await this.roleService.createNewRole(createDto);
      successResponse({
        data   : result,
        message: "Role created",
        res,
        status : HttpCodes.SUCCESS,
      });
    } catch (error: any) {
      console.error(error);
      errorResponse({
        message: error.message,
        res,
        status : HttpCodes.BAD_REQUEST,
      });
    }
  }

  async getAll(_:Request, res: Response) {
    try {
      const data = await this.roleService.getAllRoles();
      successResponse({ data, res, status: HttpCodes.SUCCESS });
    } catch (error:any) {
      console.log(error);
      errorResponse({
        message: error.message,
        res, 
        status : HttpCodes.BAD_REQUEST
      });
    }
  }
}
