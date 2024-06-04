/*
  Warnings:

  - Changed the type of `workload` on the `disciplines` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "workload",
ADD COLUMN     "workload" INTEGER NOT NULL;
