import Link from "next/link"
import { Plus } from "lucide-react"

export function NewTripTile({ index }: { index: number }) {
  return (
    <Link
      href="/trips/new"
      style={{ "--i": Math.min(index, 8) } as React.CSSProperties}
      className="reveal group flex min-h-56 flex-col items-center justify-center gap-3 rounded-card border border-dashed border-ink/20 text-body-sm text-ink transition-colors hover:border-ink/40 hover:bg-white/50"
    >
      <span className="grid size-10 place-items-center rounded-full bg-white transition-transform group-hover:scale-110">
        <Plus className="size-4" aria-hidden />
      </span>
      New trip
    </Link>
  )
}
