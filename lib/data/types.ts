// Shaped to map one-to-one onto the future Supabase tables.
export type PlaceCategory = "food" | "place" | "stay" | "museum" | "transport"

export type Place = {
  id: string
  name: string
  category: PlaceCategory
  note?: string
}

/** A trip's cover: a photo shown full-bleed, or a cutout floating on a pastel wash. */
export type Cover =
  | { kind: "photo"; src: string }
  | { kind: "cutout"; src: string; tint: "peach" | "lavender" | "mint" | "powder" | "solar" }

/** What the trips list needs. Dates are ISO (YYYY-MM-DD). */
export type TripSummary = {
  id: string
  title: string
  location: string
  startDate: string
  endDate: string
  shared: boolean
  cover: Cover
  stats: { places: number; photos: number; done: number }
}

export type TripStatus = "upcoming" | "past"

export type TripListItem = TripSummary & { status: TripStatus }

export type Trip = TripSummary & { places: Place[] }
