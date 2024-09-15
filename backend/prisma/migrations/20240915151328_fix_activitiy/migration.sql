/*
  Warnings:

  - The primary key for the `Activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `name` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(128)`.
  - Added the required column `activityType` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('ASSIGNMENT', 'EXAM', 'OTHER');

-- CreateEnum
CREATE TYPE "ActivityStatus" AS ENUM ('PENDING', 'COMPLETED', 'OVERDUE');

-- AlterTable
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_pkey",
ADD COLUMN     "activityType" "ActivityType" NOT NULL,
ADD COLUMN     "description" VARCHAR(256),
ADD COLUMN     "files" TEXT[],
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "ActivityStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(128),
ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Activity_id_seq";
