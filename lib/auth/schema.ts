import { z } from "zod"

export const credentialsSchema = z.object({
  email: z.email("That email doesn't look right"),
  password: z.string().min(8, "Use at least 8 characters"),
})

export type AuthState = {
  status: "idle" | "error" | "success"
  message?: string
  email?: string
  fieldErrors?: { email?: string; password?: string }
}
