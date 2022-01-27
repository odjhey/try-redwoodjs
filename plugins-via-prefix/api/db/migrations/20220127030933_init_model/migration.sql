-- CreateTable
CREATE TABLE "CoreOrganization" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CoreOrganization_cuid_key" ON "CoreOrganization"("cuid");
