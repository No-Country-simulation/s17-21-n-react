-- CreateTable
CREATE TABLE "Bulletin" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "description" VARCHAR(256) NOT NULL,
    "scope" VARCHAR(128) NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "isActived" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Bulletin_pkey" PRIMARY KEY ("id")
);
