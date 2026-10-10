"use client"

import { LoaderCircle } from "lucide-react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"

export function SubmitButton({ children, pendingLabel }: { children: string; pendingLabel: string }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={pending} aria-live="polite">
      {pending && <LoaderCircle className="animate-spin" aria-hidden />}
      {pending ? pendingLabel : children}
    </Button>
  )
}
