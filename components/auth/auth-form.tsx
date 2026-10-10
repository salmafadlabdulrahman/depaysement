"use client"

import { useActionState } from "react"
import { Check } from "lucide-react"
import { login, signup } from "@/app/(auth)/actions"
import type { AuthState } from "@/lib/auth/schema"
import { Field } from "./field"
import { SubmitButton } from "./submit-button"

const copy = {
  login: {
    action: login,
    submit: "Log in",
    pending: "Logging in",
    autoComplete: "current-password",
    passwordPlaceholder: "Your password",
  },
  signup: {
    action: signup,
    submit: "Create account",
    pending: "Creating account",
    autoComplete: "new-password",
    passwordPlaceholder: "At least 8 characters",
  },
} as const

const initial: AuthState = { status: "idle" }

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const c = copy[mode]
  const [state, formAction] = useActionState(c.action, initial)

  if (state.status === "success") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-input bg-powder/50 p-4">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white">
          <Check className="size-4" aria-hidden />
        </span>
        <div>
          <p className="text-sm text-ink">Check your email to confirm</p>
          <p className="text-sm text-graphite">We sent a link to {state.email}.</p>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="grid gap-3">
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        defaultValue={state.email}
        error={state.fieldErrors?.email}
        required
      />
      <Field
        label="Password"
        name="password"
        type="password"
        autoComplete={c.autoComplete}
        placeholder={c.passwordPlaceholder}
        error={state.fieldErrors?.password}
        required
      />
      {mode === "login" && (
        <p className="text-right text-xs text-graphite">
          {/* TODO(supabase): wire up resetPasswordForEmail */}
          <span className="cursor-pointer">Forgot password?</span>
        </p>
      )}
      <SubmitButton pendingLabel={c.pending}>{c.submit}</SubmitButton>
    </form>
  )
}
