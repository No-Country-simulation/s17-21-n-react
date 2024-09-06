/* eslint-disable key-spacing */
import { PageSubject } from "../dto/PageSubject";
import { SubjectEntity } from "../entities/Subject.entity";
import { ISubjectRepository } from "../repositories/ISubject.repository";
import { ISubjectService } from "./ISubject.service";
import { Paginate } from "../../../shared/utils/paginate";
import { Subject } from "@prisma/client";
import { Paginated } from "../../../shared/interfaces/Paginated";
import prisma from "../../../infrastructure/database/prisma";

export class SubjectService implements ISubjectService {
  private _subjectRepository: ISubjectRepository;

  constructor(private subjectRepository: ISubjectRepository) {
    this._subjectRepository = subjectRepository;
  }

  async getAllSubjects(page = 1, pageSize = 10): Promise<Paginated<Subject>> {
    return await Paginate<Subject>("subject", page, pageSize);
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

  async create(subject: SubjectEntity): Promise<void> {
    await this._subjectRepository.create(subject);
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
