/* eslint-disable key-spacing */
import { SubjectEntity } from "../entities/Subject.entity";
import { ISubjectRepository } from "../repositories/ISubject.repository";
import { ISubjectService } from "./ISubject.service";
import { Paginate } from "../../../shared/utils/paginate";
import { Prisma, Subject } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { FindSubjectOptions } from "../dto/subjectSelect.dto";
import { SubjectCreate } from "../dto/subjectCreate.dto";

export class SubjectService implements ISubjectService {
  private readonly _subjectRepository: ISubjectRepository;

  constructor(private subjectRepository: ISubjectRepository) {
    this._subjectRepository = subjectRepository;
  }

  private readonly includeOptions: Prisma.SubjectInclude = {
    _count: { select: { classes: true } },
    category: { select: { id: true, name: true } },
    division: { select: { id: true, name: true } },
  };

  async getAllSubjects(page = 1, pageSize = 10, filter: FindSubjectOptions, sort: Record<string, "asc" | "desc">): Promise<Paginated<Subject>> {
    return await Paginate<Subject>(
      "subject",
      page,
      pageSize,
      filter,
      sort,
      this.includeOptions
    );
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

  async create(subject: SubjectCreate): Promise<void> {
    await this._subjectRepository.create(subject as SubjectEntity);
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
