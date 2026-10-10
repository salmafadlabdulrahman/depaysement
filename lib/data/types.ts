// Shaped to map one-to-one onto the future Supabase tables.
export type PlaceCategory = "food" | "place" | "stay" | "museum" | "transport"

export type Place = {
  id: string
  name: string
  category: PlaceCategory
  note?: string
}

export type Trip = {
  id: string
  title: string
  places: Place[]
}
