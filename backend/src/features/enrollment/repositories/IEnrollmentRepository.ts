import { Enrollment } from "@prisma/client";

export interface IEnrollmentRepository {
  findMany(skip: number, take: number): Promise<Enrollment[]>;
  findByUniqueCombination(enrollmentData: Enrollment): Promise<Enrollment | null>;
  findById(id: string): Promise<Enrollment | null>;
  create(enrollmentData: Enrollment): Promise<Enrollment>;
  update(id: string, enrollmentData: Partial<Enrollment>): Promise<Enrollment | null>;
  delete(id: string): Promise<Enrollment>;
  count(): Promise<number>;
}