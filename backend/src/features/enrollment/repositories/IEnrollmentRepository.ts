import { Enrollment } from "@prisma/client";

export interface IEnrollmentRepository {
  findMany(skip: number, take: number): Promise<Enrollment[]>;
  findById(id: string): Promise<Enrollment | null>;
  create(enrollmentData: Enrollment): Promise<Enrollment>;
  update(id: string, enrollmentData: Partial<Enrollment>): Promise<Enrollment | null>;
  delete(id: string): Promise<void>;
  count(): Promise<number>;
}