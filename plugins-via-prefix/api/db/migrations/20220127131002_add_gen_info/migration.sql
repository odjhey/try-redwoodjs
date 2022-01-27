-- CreateTable
CREATE TABLE "CoreUnitExtGeneralInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "unitId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "CoreUnitExtGeneralInfo_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "CoreUnit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CoreUnitExtGeneralInfo_unitId_key" ON "CoreUnitExtGeneralInfo"("unitId");
