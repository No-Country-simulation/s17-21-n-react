/*
  Warnings:

  - You are about to drop the column `gradeId` on the `Division` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Division" DROP CONSTRAINT "Division_gradeId_fkey";

-- AlterTable
ALTER TABLE "Division" DROP COLUMN "gradeId",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
