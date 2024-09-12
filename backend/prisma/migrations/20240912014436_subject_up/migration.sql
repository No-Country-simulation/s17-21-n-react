/*
  Warnings:

  - Added the required column `description` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleEnd` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleInit` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subject_name_divisionId_key";

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "description" VARCHAR(256) NOT NULL,
ADD COLUMN     "scheduleEnd" VARCHAR(128) NOT NULL,
ADD COLUMN     "scheduleInit" VARCHAR(128) NOT NULL;
