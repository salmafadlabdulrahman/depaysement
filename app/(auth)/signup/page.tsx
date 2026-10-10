import type { Metadata } from "next"
import { AuthForm } from "@/components/auth/auth-form"
import { AuthScreen } from "@/components/auth/auth-screen"

export const metadata: Metadata = { title: "Sign up" }

export default function SignupPage() {
  return (
    <AuthScreen
      title={
        <>
          Start <span className="text-brand">saving</span> your trip.
        </>
      }
      subtitle="Cafés, places, photos and notes, all in one place."
      switchPrompt="Already have an account?"
      switchLabel="Log in"
      switchHref="/login"
    >
      <AuthForm mode="signup" />
    </AuthScreen>
  )
}
