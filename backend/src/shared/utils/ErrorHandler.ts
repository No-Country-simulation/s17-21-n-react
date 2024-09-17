import { Prisma } from "@prisma/client";

export class ErrorHandler {
  static handleError(error: unknown, message?: string): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) 
      switch (error.code) {
      case "P2002":
        throw new Error(
          `Error de clave única: ${message ?? error.message}`
        );
      case "P2003":
        throw new Error(`Error de clave foránea: ${message ?? error.message}`);
      case "P2025":
        throw new Error(`Registro no encontrado: ${message ?? error.message}`);
      default:
        throw new Error(`Error de Prisma: ${error.message} ${message ?? error.message}`);
      }
    else if (error instanceof Error) 
      throw new Error(`Error inesperado: ${error.message} ${message ?? error.message}`);
    else 
      throw new Error("Error inesperado");
  }
}
