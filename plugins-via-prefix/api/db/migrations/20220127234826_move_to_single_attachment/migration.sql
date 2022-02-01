/*
  Warnings:

  - A unique constraint covering the columns `[unitId]` on the table `CoreAttachment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CoreAttachment_unitId_key" ON "CoreAttachment"("unitId");
