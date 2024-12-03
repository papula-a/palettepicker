"use server";

import getDb from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function getPalettes(userId) {
  try {
    const db = await getDb();
    const palettes = await db.collection("palette").find({ userId }).toArray();
    return palettes;
  } catch (error) {
    console.error("Error fetching palettes:", error);
    return [];
  }
}

export async function deletePalette(formData) {
  const id = formData.get("id");

  try {
    const db = await getDb();

    // Convert id to ObjectId and delete the document
    await db.collection("palette").deleteOne({ _id: new ObjectId(id) });

    // Trigger revalidation for the current page
    revalidatePath("/profile");

    // Trigger revalidation
    return { success: true };
  } catch (error) {
    console.error("Error deleting palette:", error);
    return { success: false, error: "Failed to delete palette" };
  }
}

export async function savePalette(formData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const name = formData.get("name");
  const colors = JSON.parse(formData.get("colors"));

  try {
    const db = await getDb();
    await db.collection("palette").insertOne({
      name,
      colors,
      userId: user.id,
    });

    // Trigger revalidation
    return { success: true };
  } catch (error) {
    console.error("Error saving palette:", error);
    return { success: false, error: "Failed to save palette" };
  }
}
