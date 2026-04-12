/*
  Warnings:

  - You are about to drop the `email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "email";

-- CreateTable
CREATE TABLE "signup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "signup_pkey" PRIMARY KEY ("id")
);
