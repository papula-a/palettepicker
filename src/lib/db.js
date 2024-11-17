import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();

// Check if `globalThis` already has a `prismaGlobal` property; if not, initialize it
const prisma = globalThis.prismaGlobal || prismaClientSingleton();

// In development mode, attach `prisma` to `globalThis` to ensure a singleton
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
