/*
  Warnings:

  - A unique constraint covering the columns `[studentId,subjectId,divisionId,yearId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_subjectId_divisionId_yearId_key" ON "Enrollment"("studentId", "subjectId", "divisionId", "yearId");
