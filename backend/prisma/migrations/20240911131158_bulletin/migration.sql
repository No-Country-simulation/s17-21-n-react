/*
  Warnings:

  - You are about to drop the column `isActived` on the `Bulletin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bulletin" DROP COLUMN "isActived",
ADD COLUMN     "isActivated" BOOLEAN NOT NULL DEFAULT true;
