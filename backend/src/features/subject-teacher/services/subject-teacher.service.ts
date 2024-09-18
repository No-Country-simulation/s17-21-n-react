import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectTeacher } from "../entities/subject-teacher.entity";
import { ISubjectTeacherService } from "./ISubjectTeacher.service";
import { Paginate } from "../../../shared/utils";
import { ISubjectTeacherRepository } from "../repositories/Isubject-teacher.repository";
import { Prisma } from "@prisma/client";

export class SubjectTeacherService implements ISubjectTeacherService {
  private readonly _subjectTeacherRepository: ISubjectTeacherRepository;

  constructor(subjectTeacherRepository: ISubjectTeacherRepository) {
    this._subjectTeacherRepository = subjectTeacherRepository;
  }

  async getAllSubjectTeachers(
    page: number,
    size: number,
    filter?: Prisma.SubjectTeacherWhereInput,
    sort?: Record<string, "asc" | "desc">
  ): Promise<Paginated<SubjectTeacher>> {
    return await Paginate<SubjectTeacher>("subjectTeacher", page, size, filter, sort);
  }

  async getSubjectTeacherById(id: string): Promise<SubjectTeacher | null> {
    return await this._subjectTeacherRepository.findById(id);
  }

  async create(createDto: SubjectTeacher): Promise<SubjectTeacher> {
    return await this._subjectTeacherRepository.create(createDto);
  }

  /*async delete(id: string): Promise<void> {
    await this._subjectTeacherRepository.delete(id);
  }*/
}
