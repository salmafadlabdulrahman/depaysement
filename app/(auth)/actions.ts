"use server"

import { redirect } from "next/navigation"
import { credentialsSchema, type AuthState } from "@/lib/auth/schema"

function parse(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim()
  const password = String(formData.get("password") ?? "")
  const result = credentialsSchema.safeParse({ email, password })
  if (result.success) return { ok: true as const, data: result.data }

  const fieldErrors: NonNullable<AuthState["fieldErrors"]> = {}
  for (const issue of result.error.issues) {
    const key = issue.path[0] as "email" | "password"
    fieldErrors[key] ??= issue.message
  }
  const state: AuthState = { status: "error", email, fieldErrors }
  return { ok: false as const, state }
}

// TODO(supabase): replace the stubs with supabase.auth.signInWithPassword / signUp.

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = parse(formData)
  if (!parsed.ok) return parsed.state
  await new Promise((r) => setTimeout(r, 600)) // simulate latency
  redirect("/trips")
}

export async function signup(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = parse(formData)
  if (!parsed.ok) return parsed.state
  await new Promise((r) => setTimeout(r, 600))
  return { status: "success", email: parsed.data.email }
}

export async function signInWithGoogle() {
  // TODO(supabase): supabase.auth.signInWithOAuth({ provider: "google" })
  redirect("/trips")
}
