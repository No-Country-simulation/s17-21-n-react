/* eslint-disable key-spacing */
import { SubjectEntity } from "../entities/Subject.entity";
import { ISubjectFindMany, ISubjectRepository } from "../repositories/ISubject.repository";
import { ISubjectService } from "./ISubject.service";
import { Subject } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import { SubjectCreate } from "../dto/subjectCreate.dto";

export class SubjectService implements ISubjectService {
  private readonly _subjectRepository: ISubjectRepository;

  constructor(private subjectRepository: ISubjectRepository) {
    this._subjectRepository = subjectRepository;
  }

  async getAllSubjects(args: ISubjectFindMany, user: {
    userId?: string;
    role?: string;
  }): Promise<Paginated<Subject>> {
    return await this._subjectRepository.findMany(args, user);
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
