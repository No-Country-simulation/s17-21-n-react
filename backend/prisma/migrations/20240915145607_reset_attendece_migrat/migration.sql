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

-- CreateTable
CREATE TABLE IF NOT EXISTS "Attendance" (
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
CREATE TABLE IF NOT EXISTS "AttendanceStudent" (
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

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Class_name_subjectId_yearId_date_key" ON "Class"("name", "subjectId", "yearId", "date");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Grade_name_yearId_key" ON "Grade"("name", "yearId");
DO $$
BEGIN
    -- Verificar y crear foreign key constraint en Attendance
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'Attendance_classId_fkey'
    ) THEN
        ALTER TABLE "Attendance"
        ADD CONSTRAINT "Attendance_classId_fkey"
        FOREIGN KEY ("classId") REFERENCES "Class"("id")
        ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;

    -- Verificar y crear foreign key constraint en AttendanceStudent (studentId)
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'AttendanceStudent_studentId_fkey'
    ) THEN
        ALTER TABLE "AttendanceStudent"
        ADD CONSTRAINT "AttendanceStudent_studentId_fkey"
        FOREIGN KEY ("studentId") REFERENCES "User"("id")
        ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;

    -- Verificar y crear foreign key constraint en AttendanceStudent (attendanceId)
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'AttendanceStudent_attendanceId_fkey'
    ) THEN
        ALTER TABLE "AttendanceStudent"
        ADD CONSTRAINT "AttendanceStudent_attendanceId_fkey"
        FOREIGN KEY ("attendanceId") REFERENCES "Attendance"("id")
        ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;
END $$;
