/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Class` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_key" ON "Class"("name");
