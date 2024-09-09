/*
  Warnings:

  - A unique constraint covering the columns `[name,subjectId,divisionId,yearId]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,divisionId]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Subject_name_key";

-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_subjectId_divisionId_yearId_key" ON "Class"("name", "subjectId", "divisionId", "yearId");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_divisionId_key" ON "Subject"("name", "divisionId");
