import type { Trip } from "./types"

const trips: Trip[] = [
  {
    id: "istanbul",
    title: "Istanbul",
    places: [
      { id: "p1", name: "Blue Mosque at dusk", category: "place" },
      { id: "p2", name: "Karaköy Güllüoğlu", category: "food", note: "baklava" },
      { id: "p3", name: "Tram T1 to Eminönü", category: "transport" },
    ],
  },
]

// Static for now. Swap the body for a Supabase query later; callers don't change.
export async function getTrips(): Promise<Trip[]> {
  return trips
}
