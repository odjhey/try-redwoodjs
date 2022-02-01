-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "CoreOrganization" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "CoreDevelopment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "organizationId" INTEGER NOT NULL,
    CONSTRAINT "CoreDevelopment_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "CoreOrganization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CoreProject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "developmentId" INTEGER NOT NULL,
    CONSTRAINT "CoreProject_developmentId_fkey" FOREIGN KEY ("developmentId") REFERENCES "CoreDevelopment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CoreUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "CoreUnit_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "CoreProject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CoreUnitExtGeneralInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "unitId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "CoreUnitExtGeneralInfo_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "CoreUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CoreAttachment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "targetModel" TEXT NOT NULL,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "CoreAttachment_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "CoreUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ImagesOnCoreAttachment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attachmentId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "ImagesOnCoreAttachment_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "CoreAttachment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ImagesOnCoreAttachment_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CoreOrganization_cuid_key" ON "CoreOrganization"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "CoreDevelopment_cuid_key" ON "CoreDevelopment"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "CoreProject_cuid_key" ON "CoreProject"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "CoreUnit_cuid_key" ON "CoreUnit"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "CoreUnitExtGeneralInfo_unitId_key" ON "CoreUnitExtGeneralInfo"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "CoreAttachment_unitId_key" ON "CoreAttachment"("unitId");
