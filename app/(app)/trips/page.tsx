import type { Metadata } from "next"
import { Suspense } from "react"
import { NewTripTile } from "@/components/trips/new-trip-tile"
import { parseFilter, TripFilter } from "@/components/trips/trip-filter"
import { TripCard } from "@/components/trips/trip-card"
import { TripsEmpty } from "@/components/trips/trips-empty"
import { TripsSkeleton } from "@/components/trips/trips-skeleton"
import { getTrips } from "@/lib/data/trips"
import { formatDateRange } from "@/lib/format"

export const metadata: Metadata = { title: "Your trips" }

type Props = { searchParams: Promise<{ filter?: string }> }

export default function TripsPage({ searchParams }: Props) {
  return (
    <main className="pt-10 pb-20 sm:pt-14">
      {/* static: prerendered into the shell, so it's there instantly */}
      <h1 className="leading-tight text-[35px]">Your trips</h1>
      <p className="mt-2 mb-8 text-body-sm text-graphite">Everything you&rsquo;ve saved, trip by trip.</p>

      {/* trips are per-user, so they stream in behind a boundary */}
      <Suspense fallback={<TripsSkeleton />}>
        <Trips searchParams={searchParams} />
      </Suspense>
    </main>
  )
}

async function Trips({ searchParams }: Props) {
  const active = parseFilter((await searchParams).filter)
  const all = await getTrips()

  if (all.length === 0) return <TripsEmpty />

  const trips = active === "all" ? all : all.filter((t) => t.status === active)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <TripFilter active={active} />
      {trips.length === 0 ? (
        <p className="mt-10 text-graphite">No {active} trips yet.</p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, i) => (
            <TripCard
              key={trip.id}
              trip={trip}
              index={i}
              dateLabel={formatDateRange(trip.startDate, trip.endDate, currentYear)}
            />
          ))}
          <NewTripTile index={trips.length} />
        </div>
      )}
    </>
  )
}
