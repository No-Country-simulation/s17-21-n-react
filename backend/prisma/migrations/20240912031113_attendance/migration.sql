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

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(128) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceStudent" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "attendanceId" TEXT NOT NULL,
    "status" VARCHAR(128) NOT NULL,
    "observation" VARCHAR(256) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "AttendanceStudent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceStudent" ADD CONSTRAINT "AttendanceStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceStudent" ADD CONSTRAINT "AttendanceStudent_attendanceId_fkey" FOREIGN KEY ("attendanceId") REFERENCES "Attendance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
