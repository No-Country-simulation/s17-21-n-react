/*
  Warnings:

  - Added the required column `description` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleEnd` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleInit` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX IF EXISTS "Subject_name_divisionId_key";

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN IF NOT EXISTS     "description" VARCHAR(256) NOT NULL,
ADD COLUMN IF NOT EXISTS    "scheduleEnd" VARCHAR(128) NOT NULL,
ADD COLUMN  IF NOT EXISTS   "scheduleInit" VARCHAR(128) NOT NULL;
