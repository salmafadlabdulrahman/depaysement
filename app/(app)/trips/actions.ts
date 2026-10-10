"use server"

import { revalidatePath } from "next/cache"
import { deleteTripById, renameTripById } from "@/lib/data/trips"

export type RenameState = { error?: string }

// TODO(supabase): check the signed-in user owns the trip before changing it.

export async function renameTrip(id: string, formData: FormData): Promise<RenameState> {
  const title = String(formData.get("title") ?? "").trim()
  if (!title) return { error: "Give your trip a name" }
  if (title.length > 60) return { error: "Keep it under 60 characters" }

  await renameTripById(id, title)
  revalidatePath("/trips")
  return {}
}

export async function deleteTrip(id: string) {
  await deleteTripById(id)
  revalidatePath("/trips")
}
