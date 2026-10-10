import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getTrip } from "@/lib/data/trips"
import { formatDateRange } from "@/lib/format"

// Placeholder for the trip page (next round): just enough that cards don't lead nowhere.
export default function TripPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <main className="pt-10 pb-20">
      <Link href="/trips" className="text-body-sm text-graphite hover:text-ink">
        ← All trips
      </Link>
      <Suspense fallback={<p className="mt-6 text-graphite">Loading…</p>}>
        <TripDetails params={params} />
      </Suspense>
    </main>
  )
}

async function TripDetails({ params }: { params: Promise<{ id: string }> }) {
  const trip = await getTrip((await params).id)
  if (!trip) notFound()

  return (
    <>
      <h1 className="mt-4 text-[2.5rem] leading-tight sm:text-heading-lg">{trip.title}</h1>
      <p className="mt-2 text-graphite">
        {trip.location} · {formatDateRange(trip.startDate, trip.endDate, new Date().getFullYear())}
      </p>
      <ul className="mt-8 grid gap-3">
        {trip.places.map((p) => (
          <li key={p.id} className="rounded-card bg-white p-6">
            {p.name}
            {p.note && <span className="text-graphite"> · {p.note}</span>}
          </li>
        ))}
      </ul>
    </>
  )
}
