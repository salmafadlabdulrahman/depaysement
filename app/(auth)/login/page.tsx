import type { Metadata } from "next"
import { AuthForm } from "@/components/auth/auth-form"
import { AuthScreen } from "@/components/auth/auth-screen"

export const metadata: Metadata = { title: "Log in" }

export default function LoginPage() {
  return (
    <AuthScreen
      title={
        <>
          Welcome <span className="text-brand">back.</span>
        </>
      }
      subtitle="Your trips are right where you left them."
      switchPrompt="New here?"
      switchLabel="Create account"
      switchHref="/signup"
    >
      <AuthForm mode="login" />
    </AuthScreen>
  )
}
