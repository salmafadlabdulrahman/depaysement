import Image from "next/image"
import Link from "next/link"
import { Link2 } from "lucide-react"
import type { Cover, TripSummary } from "@/lib/data/types"
import { plural } from "@/lib/format"
import { TripMenu } from "./trip-menu"

const tints = {
  peach: "bg-peach/50",
  lavender: "bg-lavender",
  mint: "bg-mint/70",
  powder: "bg-powder/60",
  solar: "bg-solar",
} as const

function CoverImage({ cover }: { cover: Cover }) {
  const sizes = "(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"
  return (
    <div
      className={`relative aspect-[3/2] overflow-hidden rounded-[24px] ${cover.kind === "cutout" ? tints[cover.tint] : "bg-mist"}`}
    >
      {cover.kind === "photo" ? (
        <Image
          src={cover.src}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[650ms] ease-out-expo group-hover/card:scale-[1.03]"
        />
      ) : (
        <Image
          src={cover.src}
          alt=""
          fill
          sizes={sizes}
          className="object-contain p-[9%] drop-shadow-object transition-transform duration-[650ms] ease-out-expo group-hover/card:scale-[1.04]"
        />
      )}
    </div>
  )
}

type Props = {
  trip: TripSummary
  dateLabel: string
  /** position in the grid, for the staggered reveal */
  index: number
}

export function TripCard({ trip, dateLabel, index }: Props) {
  const { stats } = trip
  return (
    <article
      style={{ "--i": Math.min(index, 8) } as React.CSSProperties}
      className="reveal group/card relative rounded-card bg-white p-2 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-iris"
    >
      <CoverImage cover={trip.cover} />
      <div className="absolute top-4 right-4 z-10">
        <TripMenu id={trip.id} title={trip.title} />
      </div>

      <div className="px-3 pt-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-subheading leading-tight">
            {/* stretched link: the whole card is clickable, the menu sits above it */}
            <Link
              href={`/trips/${trip.id}`}
              className="outline-none after:absolute after:inset-0 after:rounded-card"
            >
              {trip.title}
            </Link>
          </h2>
          {trip.shared && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-powder/60 px-2.5 py-1 text-xs text-ink">
              <Link2 className="size-3" aria-hidden />
              Shared
            </span>
          )}
        </div>
        <p className="mt-1 text-body-sm text-graphite">
          {trip.location} · {dateLabel}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[plural(stats.places, "place"), plural(stats.photos, "photo"), `${stats.done} done`].map((chip) => (
            <li key={chip} className="rounded-full bg-mist px-3 py-1 text-xs text-graphite">
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
