import { Prisma } from "@prisma/client";

export class ErrorHandler {
  static handleError(error: unknown, message?: string): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) 
      switch (error.code) {
      case "P2002":
        throw new Error(
          `Unique constraint failed. The value already exists. ${message}`
        );
      case "P2025":
        throw new Error(`Record not found. ${message}`);
      default:
        throw new Error(`Prisma error: ${error.message} ${message}`);
      }
    else if (error instanceof Error) 
      throw new Error(`Unexpected error: ${error.message}`);
    else 
      throw new Error("Unexpected error");
    
  }
}
