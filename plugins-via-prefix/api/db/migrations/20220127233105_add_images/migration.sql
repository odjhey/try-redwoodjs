-- CreateTable
CREATE TABLE "CoreAttachment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "targetModel" TEXT NOT NULL,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "CoreAttachment_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "CoreUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ImagesOnCoreAttachment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attachmentId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    CONSTRAINT "ImagesOnCoreAttachment_attachmentId_fkey" FOREIGN KEY ("attachmentId") REFERENCES "CoreAttachment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ImagesOnCoreAttachment_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
