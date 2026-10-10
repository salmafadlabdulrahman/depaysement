import { getTrips } from "@/lib/data/trips"

// Placeholder: the signed-in product lives under (app). Auth redirects here.
export default async function TripsPage() {
  const trips = await getTrips()
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-heading mb-6">Your trips</h1>
      <ul className="grid gap-3">
        {trips.map((trip) => (
          <li key={trip.id} className="rounded-card bg-card p-6">
            {trip.title} · {trip.places.length} saved
          </li>
        ))}
      </ul>
    </main>
  )
}
