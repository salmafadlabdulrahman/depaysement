import { connection } from "next/server"
import type { Place, Trip, TripListItem, TripSummary } from "./types"

// Static stand-in for the database. In-memory, so edits last until the server restarts.
// TODO(supabase): replace each function body with a query; callers don't change.
let trips: TripSummary[] = [
  {
    id: "istanbul",
    title: "Istanbul",
    location: "Istanbul, Türkiye",
    startDate: "2026-11-14",
    endDate: "2026-11-21",
    shared: true,
    cover: { kind: "photo", src: "/photo-blue-mosque.png" },
    stats: { places: 14, photos: 9, done: 5 },
  },
  {
    id: "west-of-ireland",
    title: "West of Ireland",
    location: "Clare, Ireland",
    startDate: "2026-09-03",
    endDate: "2026-09-09",
    shared: false,
    cover: { kind: "photo", src: "/photo-cliffs.png" },
    stats: { places: 11, photos: 26, done: 11 },
  },
  {
    id: "lisbon",
    title: "Lisbon",
    location: "Lisbon, Portugal",
    startDate: "2026-08-18",
    endDate: "2026-08-24",
    shared: true,
    cover: { kind: "cutout", src: "/tram-cutout.png", tint: "peach" },
    stats: { places: 22, photos: 31, done: 18 },
  },
  {
    id: "konya",
    title: "Konya",
    location: "Konya, Türkiye",
    startDate: "2026-12-15",
    endDate: "2026-12-18",
    shared: false,
    cover: { kind: "cutout", src: "/dervish-cutout.png", tint: "lavender" },
    stats: { places: 6, photos: 4, done: 0 },
  },
  {
    id: "cairo-food-trip",
    title: "Cairo food trip",
    location: "Cairo, Egypt",
    startDate: "2027-02-02",
    endDate: "2027-02-08",
    shared: false,
    cover: { kind: "cutout", src: "/cookies-plate-cutout.png", tint: "mint" },
    stats: { places: 19, photos: 12, done: 0 },
  },
]

const samplePlaces: Place[] = [
  { id: "p1", name: "Blue Mosque at dusk", category: "place" },
  { id: "p2", name: "Karaköy Güllüoğlu", category: "food", note: "baklava" },
  { id: "p3", name: "Tram T1 to Eminönü", category: "transport" },
]

/** Shown from the empty state ("See an example trip"). Not part of the user's data. */
const exampleTrip: Trip = { ...trips[0], id: "example", places: samplePlaces }

/** Upcoming or past, from the trip's end date. */
function statusOf(trip: TripSummary, today: string): TripListItem["status"] {
  return trip.endDate < today ? "past" : "upcoming"
}

export async function getTrips(): Promise<TripListItem[]> {
  // Stand-in for reading the session: a signed-in user's trips are per-request data.
  await connection()
  const today = new Date().toISOString().slice(0, 10)
  return trips.map((t) => ({ ...t, status: statusOf(t, today) }))
}

export async function getTrip(id: string): Promise<Trip | null> {
  await connection()
  if (id === "example") return exampleTrip
  const trip = trips.find((t) => t.id === id)
  return trip ? { ...trip, places: samplePlaces } : null
}

export async function renameTripById(id: string, title: string) {
  trips = trips.map((t) => (t.id === id ? { ...t, title } : t))
}

export async function deleteTripById(id: string) {
  trips = trips.filter((t) => t.id !== id)
}
