import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";

const connectionString = process.env.DIRECT_URL as string;

if (!connectionString) {
  throw new Error("DIRECT_URL is not set");
}

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({
  adapter,
});
