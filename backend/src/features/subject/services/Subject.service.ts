/* eslint-disable key-spacing */
import { SubjectEntity } from "../entities/Subject.entity";
import { ISubjectRepository } from "../repositories/ISubject.repository";
import { ISubjectService } from "./ISubject.service";
import { Subject } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";
import { SubjectCreate } from "../dto/subjectCreate.dto";
import { IAcademicYearRepository } from "../../academic_year/repositories/Iacademic-year.repository";

export class SubjectService implements ISubjectService {
  private readonly _subjectRepository: ISubjectRepository;
  private readonly _academicYearRepository: IAcademicYearRepository;

  constructor(private subjectRepository: ISubjectRepository, private academicYearRepository: IAcademicYearRepository) {
    this._subjectRepository = subjectRepository;
    this._academicYearRepository = academicYearRepository;
  }

  async getAllSubjects(
    page = 1,
    pageSize = 10,
    filter: FindSubjectOptions,
    sort: Record<string, "asc" | "desc">,
    user: { userId?: string; role?: string }
  ): Promise<Paginated<Subject>> {
    return await this._subjectRepository.findMany({ filter, page, pageSize, sort }, user );
  }

  async getSubjectById(id: string): Promise<SubjectEntity | null> {
    return await this._subjectRepository.findById(id);
  }
  async getSubjectByName(name: string): Promise<SubjectEntity | null> {
    return await this._subjectRepository.findByName(name);
  }
  async findById(id: string): Promise<SubjectEntity | null> {
    return await this._subjectRepository.findById(id);
  }

  async findByName(name: string): Promise<SubjectEntity | null> {
    return await this._subjectRepository.findByName(name);
  }

  async create(subject: SubjectCreate): Promise<SubjectEntity> {
    const { subjectTeachers, ...subjectData } = subject;
    const academicYear = await this._academicYearRepository.findLatest();
    if (!subjectTeachers) throw new Error("No subject teachers found");
    if (!academicYear) throw new Error("No academic year found");
    
    return this._subjectRepository.create(subjectData as Subject, subjectTeachers, academicYear.id);
  }

  async update(
    id: string,
    data: Partial<SubjectEntity>
  ): Promise<SubjectEntity | null> {
    return await this._subjectRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this._subjectRepository.delete(id);
  }
}
