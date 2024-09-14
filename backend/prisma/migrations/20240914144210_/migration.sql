/*
  Warnings:

  - You are about to drop the column `divisionId` on the `Class` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,subjectId,yearId,date]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,yearId]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_divisionId_fkey";

-- DropIndex
DROP INDEX "Class_name_subjectId_divisionId_yearId_key";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "divisionId";

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_subjectId_yearId_date_key" ON "Class"("name", "subjectId", "yearId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_name_yearId_key" ON "Grade"("name", "yearId");
