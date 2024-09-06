import { Request, Response } from "express";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";
import { UserService } from "../services/user.service";

export class UserController {
  constructor (private userService:UserService){}

  async registerNewUser(req: Request, res: Response){
    try {
      const userDto = req.body;
      const result = await this.userService.createUser(userDto);
      successResponse({ data: result, res, status: HttpCodes.SUCCESS_CREATED });
    } catch (error:any) {
      console.log(error);
      errorResponse({ message: error.message, res, status: HttpCodes.BAD_REQUEST });
    }
  }
}