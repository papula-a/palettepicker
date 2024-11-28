"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export async function getPalettes(id) {
  try {
    const palettes = await prisma.palette.findMany({
      where: {
        userId: id,
      },
    });
    return palettes;
  } catch (error) {
    console.error("Error fetching palettes:", error);
    return [];
  }
}

export async function deletePalette(formData) {
  const id = formData.get("id");

  try {
    await prisma.palette.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/user/profile");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete palette" };
  }
}

export async function savePalette(formData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const name = formData.get("name");
  const colors = JSON.parse(formData.get("colors"));

  try {
    await prisma.palette.create({
      data: {
        name,
        colors,
        userId: user.id,
      },
    });

    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Error saving palette:", error);
    return { success: false, error: "Failed to save palette" };
  }
}
