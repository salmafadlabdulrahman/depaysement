import Link from "next/link"

export const filters = [
  { value: "all", label: "All", href: "/trips" },
  { value: "upcoming", label: "Upcoming", href: "/trips?filter=upcoming" },
  { value: "past", label: "Past", href: "/trips?filter=past" },
] as const

export type Filter = (typeof filters)[number]["value"]

export function parseFilter(value: string | undefined): Filter {
  return value === "upcoming" || value === "past" ? value : "all"
}

/** Links, not client state: the filter lives in the URL, so back/forward and sharing work. */
export function TripFilter({ active }: { active: Filter }) {
  return (
    <nav aria-label="Filter trips" className="inline-flex gap-1 rounded-full bg-powder/50 p-1">
      {filters.map((f) => (
        <Link
          key={f.value}
          href={f.href}
          replace
          scroll={false}
          aria-current={f.value === active ? "page" : undefined}
          className={`rounded-full px-4 py-2 text-body-sm transition-colors ${
            f.value === active ? "bg-white text-ink" : "text-graphite hover:text-ink"
          }`}
        >
          {f.label}
        </Link>
      ))}
    </nav>
  )
}
