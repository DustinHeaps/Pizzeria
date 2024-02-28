/*
  Warnings:

  - You are about to drop the column `addressLine1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `clerkId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_clerkId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "addressLine1",
DROP COLUMN "clerkId",
ADD COLUMN     "address" TEXT;
