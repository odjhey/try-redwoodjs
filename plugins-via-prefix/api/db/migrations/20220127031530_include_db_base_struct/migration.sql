-- CreateTable
CREATE TABLE "CoreDevelopment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "organizationId" INTEGER NOT NULL,
    CONSTRAINT "CoreDevelopment_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "CoreOrganization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CoreProject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "developmentId" INTEGER NOT NULL,
    CONSTRAINT "CoreProject_developmentId_fkey" FOREIGN KEY ("developmentId") REFERENCES "CoreDevelopment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CoreUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "CoreUnit_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "CoreProject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CoreDevelopment_cuid_key" ON "CoreDevelopment"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "CoreProject_cuid_key" ON "CoreProject"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "CoreUnit_cuid_key" ON "CoreUnit"("cuid");
