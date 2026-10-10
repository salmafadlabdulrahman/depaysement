import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TripsEmpty() {
  return (
    // data-trips-empty makes the nav's "New trip" button step back (see app-nav.tsx)
    <section data-trips-empty className="reveal rounded-card bg-white px-6 py-14 text-center sm:py-20">
      {/* <div aria-hidden className="relative mx-auto mb-6 h-36 w-72 sm:h-44 sm:w-96">
        {/* <Image
          src="/fish-cutout.png"
          alt=""
          width={720}
          height={450}
          className="m-auto w-3/5 drop-shadow-object"
        /> */}
        {/* <Image
          src="/telephone-cutout.png"
          alt=""
          width={497}
          height={373}
          className="absolute top-2 right-0 w-[42%] rotate-[4deg] drop-shadow-object"
        /> 
      </div> */}
      <h2 className="text-[1.7rem] leading-tight">No trips yet.</h2>
      <p className="mx-auto mt-2 text-md max-w-sm text-balance text-graphite">
        Start with a trip, then drop in everything you&rsquo;d otherwise screenshot.
      </p>
      <div className="mt-8 flex flex-col items-center gap-5">
        <Button asChild size="lg">
          <Link href="/trips/new">Create your first trip</Link>
        </Button>
        <Link
          href="/trips/example"
          className="text-body-sm text-ink underline underline-offset-4"
        >
          See an example trip →
        </Link>
      </div>
    </section>
  )
}
