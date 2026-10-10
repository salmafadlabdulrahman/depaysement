import Link from "next/link"
import { Wordmark } from "@/components/brand/wordmark"
import { Button } from "@/components/ui/button"
import { GoogleButton } from "./google-button"

type Props = {
  title: React.ReactNode
  subtitle: string
  switchPrompt: string
  switchLabel: string
  switchHref: string
  children: React.ReactNode
}

export function AuthScreen({ title, subtitle, switchPrompt, switchLabel, switchHref, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col px-6 py-8 sm:px-12">
      <header className="flex items-center justify-between">
        <Wordmark />
        <div className="flex items-center gap-3 text-sm text-graphite">
          <span className="hidden sm:inline">{switchPrompt}</span>
          <Button asChild variant="outline" size="sm" className="h-8 px-4">
            <Link href={switchHref}>{switchLabel}</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
        <h1 className="text-center text-display leading-[1.05] text-[60px]">{title}</h1>
        <p className="mt-4 mb-8 text-center text-graphite">{subtitle}</p>
        {children}
        <div className="my-5 flex items-center gap-4 text-xs text-graphite" role="separator">
          <span className="h-px flex-1 bg-hairline" />
          or
          <span className="h-px flex-1 bg-hairline" />
        </div>
        <GoogleButton />
      </main>

      <footer className="flex justify-between text-xs text-graphite">
        <span>© dépaysement, 2026</span>
        <span>Terms · Privacy</span>
      </footer>
    </div>
  )
}
