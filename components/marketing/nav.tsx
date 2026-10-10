"use client"

import Link from "next/link"
import { useState } from "react"
import { Wordmark } from "@/components/brand/wordmark"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#share", label: "Share" },
  { href: "#faq", label: "FAQ" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto max-w-[1200px] rounded-[2rem] bg-white md:rounded-full"
      >
        <div className="flex h-16 items-center justify-between pr-3 pl-6">
          <Wordmark />

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-body-sm text-graphite transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild className="h-10 px-5 text-sm">
              <Link href="/signup">Start saving</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="grid size-10 place-items-center rounded-full bg-mist md:hidden"
            >
              <span className="grid gap-[5px]" aria-hidden>
                <span
                  className={`block h-[2px] w-4 rounded-full bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-[2px] w-4 rounded-full bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <ul id="mobile-menu" className="grid gap-1 border-t border-hairline p-3 md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-3 text-ink hover:bg-mist"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/login" className="block rounded-full px-4 py-3 text-ink hover:bg-mist">
                Log in
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
