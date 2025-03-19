-- CreateTable
CREATE TABLE "Holiday" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "localName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "fixed" BOOLEAN NOT NULL,
    "global" BOOLEAN NOT NULL,
    "counties" TEXT[],
    "launchYear" INTEGER,
    "types" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Holiday_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Holiday" ADD CONSTRAINT "Holiday_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
