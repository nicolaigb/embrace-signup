import { PrismaClient, Prisma } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});
const prisma = new PrismaClient({ adapter });

const emailData: Prisma.SignupCreateInput[] = [
  {
    name: "Smoke",
    email: "smoke@trillwaukee.co",
  },
  {
    name: "Brendt Frennan",
    email: "bf@runnaofthemill.com",
  },
];

export async function main() {
  for (const u of emailData) {
    await prisma.signup.create({ data: u });
  }
}

main();
