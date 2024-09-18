import { ISubjectRepository } from "./ISubject.repository";
import prisma from "../../../infrastructure/database/prisma";
import { Prisma, Subject } from "@prisma/client";
import { ErrorHandler } from "../../../shared/utils/ErrorHandler";
import { Paginate } from "../../../shared/utils";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";
import { SubjectTeacherCreate, SubjectTeachersOperations } from "../dto/subjectCreate.dto";
import { SystemBaseRoles } from "../../../shared/constants";

export class SubjectRepository implements ISubjectRepository {

  private readonly includeOptions: Prisma.SubjectInclude = {
    _count         : { select: { classes: true } },
    category       : { select: { id: true, name: true } },
    division       : { select: { id: true, name: true } },
    subjectTeachers: {
      select: { id: true, teacher: { select: { id: true, lastName: true, name: true } } },
    },
  };

  private buildWhereClause(filter: FindSubjectOptions, user: { userId?: string; role?: string }): Prisma.SubjectWhereInput	 {
    switch (user.role) {
    case "TEACHER":
      return {
        ...filter,
        subjectTeachers: {
          some: { teacherId: user.userId }
        }
      };
    case "STUDENT":
      return { 
        ...filter,
        enrollments: {
          some: { studentId: user.userId }
        }
      };
    case "ADMIN":
      return filter;
    default:
      throw new Error("Rol de usuario no válido");
    }
  }

  async findMany(options: { page: number; pageSize: number; sort: Record<string, "asc" | "desc">; filter: FindSubjectOptions }, user: { userId?: string; role?: string }): Promise<Paginated<Subject>> {
    try {
      const { page, pageSize, sort, filter } = options;
      const whereClause = this.buildWhereClause(filter, user);

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
      return await prisma.subject.findUnique({ include: this.includeOptions, where: { id } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }

  async findByName(name: string): Promise<Subject | null> {
    try {
      return await prisma.subject.findFirst({ include: this.includeOptions, where: { name: { equals: name, mode: "insensitive" } } });
    } catch (error) {
      ErrorHandler.handleError(error);
    }
  }
  
  private async validateTeachers(subjectTeachers: SubjectTeacherCreate[]): Promise<void> {
    for (const teacher of subjectTeachers) {
      const existingTeacher = await prisma.user.findUnique({
        where: { id: teacher.teacherId, role: { name: SystemBaseRoles.TEACHER } }
      });
      if (!existingTeacher) 
        throw new Error(`El profesor con ID ${teacher.teacherId} no existe`);
    }
  }

  async create(subject: Subject, subjectTeachers: SubjectTeacherCreate[], yearId: string): Promise<Subject> {
    try {
      if (!subject) throw new Error("Data to create cannot be empty");
      
      await this.validateTeachers(subjectTeachers);

      return await prisma.subject.create({
        data: {
          ...subject,
          subjectTeachers: {
            create: subjectTeachers.map(teacher => ({
              academicYear: { connect: { id: yearId } },
              teacher     : { connect: { id: teacher.teacherId } }
            }))
          }
        }
      });

    } catch (error: unknown) {
      let message = error instanceof Error ? error.message : "Error desconocido";
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2003") 
        message = "Asegúrese de que categoryId Y divisionId existan";
      ErrorHandler.handleError(error, message);
    }
  }

  private buildSubjectTeachersUpdateData(subjectTeachers: SubjectTeachersOperations): Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput {
    const updateData: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput = {};

    if (subjectTeachers.add) 
      updateData.create = subjectTeachers.add.map(st => ({
        academicYear: { connect: { id: st.academicYearId } },
        teacher     : { connect: { id: st.teacherId } }
      }));
  

    if (subjectTeachers.remove) 
      updateData.deleteMany = {
        OR: subjectTeachers.remove.map(teacher => ({
          subjectId: teacher.subjectId,
          teacherId: teacher.teacherId,
          yearId   : teacher.academicYearId
        }))
      };

    if (subjectTeachers.set) {
      updateData.deleteMany = {};
      updateData.create = subjectTeachers.set.map(st => ({
        academicYear: { connect: { id: st.academicYearId } },
        teacher     : { connect: { id: st.teacherId } }
      }));
    }

    return updateData;
  }

  async update(id: string, subject: Omit<Partial<Subject>, "subjectTeachers"> & { subjectTeachers?: SubjectTeachersOperations }): Promise<Subject> {
    try {
      const updated = { ...subject } as Prisma.SubjectUpdateInput;

      if (subject.subjectTeachers) {
        const currentSubject = await prisma.subject.findUnique({
          include: { subjectTeachers: true },
          where  : { id }
        });

        if (!currentSubject) 
          throw new Error("Asignatura no encontrada");

        if (subject.subjectTeachers.add) {
          const newTeachers = subject.subjectTeachers.add.filter(newTeacher => 
            !currentSubject.subjectTeachers.some(
              currentTeacher => 
                currentTeacher.teacherId === newTeacher.teacherId &&
                currentTeacher.yearId === newTeacher.academicYearId
            )
          );
          if (newTeachers.length === 0) 
            throw new Error("Todos los profesores ya están asignados a esta asignatura");
          
          subject.subjectTeachers.add = newTeachers;
        }

        updated.subjectTeachers = this.buildSubjectTeachersUpdateData(subject.subjectTeachers);
      }

      return await prisma.subject.update({ 
        data   : updated, 
        include: this.includeOptions, 
        where  : { id } 
      });
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
