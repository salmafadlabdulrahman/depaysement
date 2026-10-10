import Link from "next/link"

// Placeholder for the "new trip" flow (a later round).
export default function NewTripPage() {
  return (
    <main className="pt-10 pb-20">
      <Link href="/trips" className="text-body-sm text-graphite hover:text-ink">
        ← All trips
      </Link>
      <h1 className="mt-4 text-[2.5rem] leading-tight sm:text-heading-lg">New trip</h1>
      <p className="mt-2 text-graphite">Coming next.</p>
    </main>
  )
}
