/*
  Warnings:

  - Added the required column `address` to the `Meetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Meetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationLatitude` to the `Meetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationLongitude` to the `Meetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationName` to the `Meetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Meetup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Meetup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meetup" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "locationLatitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationLongitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationName" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
