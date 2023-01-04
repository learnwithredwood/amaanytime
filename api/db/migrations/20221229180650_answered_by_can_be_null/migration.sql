-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_answeredByUserId_fkey";

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "answeredByUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_answeredByUserId_fkey" FOREIGN KEY ("answeredByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
