import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Check if `globalThis` already has a `prismaGlobal` property; if not, initialize it
const prisma = globalThis.prismaGlobal || prismaClientSingleton();

export default prisma;

// In development mode, attach `prisma` to `globalThis` to ensure a singleton
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
