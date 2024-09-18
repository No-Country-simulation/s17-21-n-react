import { ISubjectFindMany, ISubjectRepository } from "./ISubject.repository";
import prisma from "../../../infrastructure/database/prisma";
import { Prisma, Subject } from "@prisma/client";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";
import { Paginate } from "../../../shared/utils";
import { Paginated } from "../../../shared/interfaces/Paginated";

export class SubjectRepository implements ISubjectRepository {
  private readonly includeOptions: Prisma.SubjectInclude = {
    _count  : { select: { classes: true } },
    category: { select: { id: true, name: true } },
    division: { select: { id: true, name: true } },
  };

  async findMany({ page, pageSize, sort, filter }: ISubjectFindMany, user: {
    userId?: string;
    role?: string;
  }): Promise<Paginated<Subject>> {
    try {
      let whereClause: any = {};
      switch (user.role) {
      case "TEACHER":
        whereClause = {
          ...filter,
          subjectTeachers: {
            some: { teacherId: user.userId }
          }
        };
        break;
      case "STUDENT":
        whereClause = { 
          ...filter,
          enrollments: {
            some: { studentId: user.userId }
          }
        };
        break;
      case "ADMIN":
        // Los administradores pueden ver todas las asignaturas
        whereClause = filter;
        break;
      default:
        throw new Error("Rol de usuario no válido");
      }

      return await Paginate<Subject>(
        "subject",
        page,
        pageSize,
        whereClause,
        sort,
        this.includeOptions
      );
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async findById(id: string): Promise<Subject | null> {
    try {
      return await prisma.subject.findUnique({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async findByName(name: string): Promise<Subject | null> {
    try {
      return await prisma.subject.findFirst({ where: { name } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async create(subject: Subject): Promise<Subject> {
    try {
      if (!subject) throw new Error("Data to create cannot be empty");
      return await prisma.subject.create({ data: subject });
    } catch (error: unknown) {
      let message = error instanceof Error ? error.message : "Error desconocido";
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2003") 
        message = "Asegúrese de que categoryId Y divisionId existan";
      ErrorHandler.handleError(error, message);
    }
  }
  async update(id: string, subject: Subject): Promise<Subject> {
    try {
      return await prisma.subject.update({ data: subject, where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async delete(id: string): Promise<Subject> {
    try {
      return await prisma.subject.delete({ where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  async count(): Promise<number> {
    try {
      return await prisma.subject.count({ where: { isDeleted: false } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
}
