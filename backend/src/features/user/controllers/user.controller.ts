import { Request, Response } from "express";
import { errorResponse, HttpCodes, successResponse } from "../../../shared/utils";
import { UserService } from "../services/user.service";
import { UpdateUserDto } from "../dtos/update.dto";
import { FindUsersOptionsDto } from "../dtos/select.dto";

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

  async updateUser(req:Request, res:Response){
    try {
      const updateDto = req.body as UpdateUserDto;
      const userId = req.params["userId"];
      if(!userId)
        throw Error(":userId required");
      const result = await this.userService.updateUser(userId, updateDto);
      successResponse({ data: result, message: "User updated", res, status: HttpCodes.SUCCESS });
    } catch (error:unknown) {
      console.log(error);
      if(error instanceof Error)
        return errorResponse({ message: error.message, res, status: HttpCodes.BAD_REQUEST });
      
      return errorResponse({ message: "Internal server error", res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async getUsers(req:Request, res:Response){
    try {
      const params = req.query as unknown as FindUsersOptionsDto;
      const data =  await this.userService.getUsers(params);
      return successResponse({ data: data, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      console.log(error);
      if(error instanceof Error)
        return errorResponse({ message: error.message, res, status: HttpCodes.BAD_REQUEST });
      
      return errorResponse({ message: "Internal server error", res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async softDeleteUser(req:Request, res:Response){
    try {
      const userId = req.params["userId"];
      if(!userId)
        throw Error(":userId required");
      await this.userService.softDeleteUser(userId);
      return successResponse({ message: "User deleted", res, status: HttpCodes.SUCCESS });
    } catch (error) {
      console.log(error);
      if(error instanceof Error)
        return errorResponse({ message: error.message, res, status: HttpCodes.BAD_REQUEST });
      
      return errorResponse({ message: "Internal server error", res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }

  async getUserById(req:Request, res:Response){
    try {
      const userId = req.params["userId"];
      if(!userId)
        throw Error(":userId required");
      const user = await this.userService.getUserByIdOrThrow(userId);
      return successResponse({ data: user, res, status: HttpCodes.SUCCESS });
    } catch (error) {
      console.log(error);
      if(error instanceof Error)
        return errorResponse({ message: error.message, res, status: HttpCodes.BAD_REQUEST });
      
      return errorResponse({ message: "Internal server error", res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  }
}