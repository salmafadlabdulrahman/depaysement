import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { Button } from "@/components/ui/button"
import { FloatingImage } from "./floating-image"
import { Sparkle } from "./sparkle"

const reveal = (i: number) => ({ "--i": i }) as CSSProperties

/** Headline, subhead, buttons and the small line. Shared by both variants. */
function HeroCopy() {
  return (
    <div className="relative z-10 mx-auto flex max-w-[56rem] flex-col items-center text-center">
      <h1
        className="reveal text-[2.75rem] leading-[1.05] md:text-[3.5rem] lg:text-[clamp(4.5rem,8vw,9.25rem)]"
        style={reveal(0)}
      >
        Your whole trip,
        <br />
        <span className="text-brand">in one place.</span>
      </h1>

      <p
        className="reveal mt-5 max-w-[36rem] text-balance text-body-lg text-graphite md:mt-6 md:text-subheading"
        style={reveal(1)}
      >
        Save the cafés, places, photos and notes from every trip in one place, and
        share them with the people you&rsquo;re going with.
      </p>

      <div
        className="reveal mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        style={reveal(2)}
      >
        <Button
          asChild
          size="lg"
          className="group transition-transform hover:scale-[1.02]"
        >
          <Link href="/signup">Start saving</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="group transition-transform hover:scale-[1.02]"
        >
          <Link href="#how-it-works">
            See how it works
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Button>
      </div>

      <p className="reveal mt-5 text-body-sm text-graphite" style={reveal(3)}>
        Made for the screenshot hoarders
      </p>
    </div>
  )
}

/** Faint lightening behind the headline. */
const glow =
  "bg-[radial-gradient(ellipse_55%_50%_at_50%_45%,rgba(255,255,255,0.75),transparent)]"

/**
 * Variant A: images around the headline.
 * Positions are per-image props (at = desktop, sm = tablet/mobile), all % of the
 * frame, so they can be tuned right here.
 * Below lg only four images are kept: tram, mosque, cookies, journal.
 */
export function HeroA() {
  return (
    <section className={`relative overflow-hidden ${glow}`}>
      <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-[21rem] pb-[16rem] md:pt-[24.5rem] md:pb-[19rem] lg:flex lg:aspect-[16/10] lg:min-h-[760px] lg:items-center lg:justify-center lg:px-10 lg:pt-20 lg:pb-0">
        <HeroCopy />

        <FloatingImage
          src="/tram-cutout.png" width={663} height={860}
          at={{ x: "11.5%", y: "30%", w: "17%" }}
          sm={{ x: "26%", y: "14rem", w: "min(32%, 13rem)" }}
          tilt={-8} caption="Rides" i={4} floatDelay={0} z={1}
        />
        <FloatingImage
          src="/photo-blue-mosque.png" width={698} height={1020} print
          at={{ x: "88%", y: "30%", w: "16%" }}
          sm={{ x: "76%", y: "14rem", w: "min(26%, 11rem)" }}
          caption="Places" i={5} floatDelay={2} z={1}
        />
        <FloatingImage
          src="/dervish-cutout.png" width={633} height={691}
          at={{ x: "7%", y: "59.5%", w: "11%" }}
          caption="Culture" i={6} floatDelay={4} z={1}
        />
        <FloatingImage
          src="/cookies-plate-cutout.png" width={736} height={735}
          at={{ x: "13%", y: "85%", w: "16%" }}
          sm={{ x: "26%", y: "calc(100% - 10rem)", w: "min(34%, 14rem)" }}
          caption="Food" i={7} floatDelay={1} z={1}
        />
        <FloatingImage
          src="/journal-cover.png" width={641} height={837}
          at={{ x: "87%", y: "81%", w: "14%" }}
          sm={{ x: "76%", y: "calc(100% - 10rem)", w: "min(26%, 11rem)" }}
          tilt={6} caption="Notes" i={8} floatDelay={3} z={1}
        />
        <FloatingImage
          src="/photo-cliffs.png" width={1174} height={780} print
          at={{ x: "77%", y: "89%", w: "13%" }}
          caption="Photos" i={9} floatDelay={5} z={2}
        />
        <FloatingImage
          src="/beach-message-sticker.png" width={358} height={109}
          at={{ x: "29%", y: "75%", w: "12%" }}
          tilt={-5} i={10} floatDelay={6} z={1}
        />
      </div>
    </section>
  )
}

/** Variant B: one composed image under the buttons, lower part cropped by the frame. */
export function HeroB() {
  return (
    <section className={`relative overflow-hidden ${glow}`}>
      <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-28 md:pt-32 lg:h-[900px] lg:pt-32">
        <HeroCopy />

        <div
          className="reveal relative mx-auto mt-10 -mb-[22%] w-[92%] md:w-[68%] lg:mt-8 lg:mb-0 lg:w-[44%] xl:w-[42%]"
          style={reveal(4)}
        >
          <div className="float" style={{ "--float-delay": "-2s" } as CSSProperties}>
            <Image
              src="/composite-trip-envelope.png"
              alt=""
              width={2400}
              height={2400}
              sizes="(min-width: 1024px) 44vw, 92vw"
              priority
              className="h-auto w-full"
            />
          </div>
          <Sparkle className="top-[8%] -left-[6%] size-8 text-solar lg:size-12" />
          <Sparkle className="top-[34%] -right-[8%] size-6 text-brand lg:size-9" />
          <Sparkle className="top-[62%] -left-[10%] size-5 text-peach lg:size-7" />
        </div>
      </div>
    </section>
  )
}
