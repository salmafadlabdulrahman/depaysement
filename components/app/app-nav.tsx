import Link from "next/link"
import { Plus } from "lucide-react"
import { Wordmark } from "@/components/brand/wordmark"

// With no trips the page shows its own dark "Create your first trip" button, and a view
// gets one filled dark button only, so this one turns into a white outline pill.
// The page opts in by rendering an element with data-trips-empty.
export function AppNav() {
  return (
    <header className="sticky top-4 z-30 pt-4">
      <nav
        aria-label="Main"
        className="flex h-14 items-center justify-between rounded-full bg-white pr-2 pl-6 sm:h-16 sm:pr-3"
      >
        <Wordmark />
        <div className="flex items-center gap-2">
          <Link
            href="/trips/new"
            aria-label="New trip"
            // class names are written out in full: Tailwind can't see ones built from strings
            className="inline-flex size-10 items-center justify-center gap-1.5 rounded-full bg-charcoal text-sm text-white shadow-button transition-transform hover:scale-[1.03] group-has-[[data-trips-empty]]/app:border group-has-[[data-trips-empty]]/app:border-hairline group-has-[[data-trips-empty]]/app:bg-white group-has-[[data-trips-empty]]/app:text-ink group-has-[[data-trips-empty]]/app:shadow-none sm:w-auto sm:px-4"
          >
            <Plus className="size-4" aria-hidden />
            <span className="hidden sm:inline">New trip</span>
          </Link>
          {/* TODO(supabase): becomes the account menu (profile, log out) */}
          <span
            role="img"
            aria-label="Your account"
            className="grid size-10 place-items-center rounded-full bg-lavender text-sm text-ink"
          >
            L
          </span>
        </div>
      </nav>
    </header>
  )
}
