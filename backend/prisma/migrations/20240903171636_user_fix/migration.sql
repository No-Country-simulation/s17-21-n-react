/*
  Warnings:

  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(256)`.
  - You are about to alter the column `dni` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(56)`.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "last_name" VARCHAR(128) NOT NULL,
ADD COLUMN     "name" VARCHAR(128) NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(256),
ALTER COLUMN "dni" SET DATA TYPE VARCHAR(56);
