import Image from "next/image"
import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

/** Centre point and width as CSS lengths, e.g. { x: "12%", y: "27%", w: "18%" } */
type Placement = { x: string; y: string; w: string }

type Props = {
  src: string
  /** intrinsic pixel size of the file, so the browser can reserve space */
  width: number
  height: number
  /** desktop (lg+) placement, % of the hero frame */
  at: Placement
  /** tablet/mobile placement. Omit to hide the image below lg */
  sm?: Placement
  /** degrees; 0 = straight. Eases to 0 on hover */
  tilt?: number
  /** show as a photo print (card-coloured border, small radius) */
  print?: boolean
  caption?: string
  /** reveal stagger index (80ms steps) */
  i: number
  /** ambient float delay in seconds */
  floatDelay?: number
  z?: number
}

/**
 * Four nested layers so the transforms never fight:
 * position -> reveal (load) -> float (ambient) -> tilt/hover.
 */
export function FloatingImage({
  src,
  width,
  height,
  at,
  sm,
  tilt = 0,
  print = false,
  caption,
  i,
  floatDelay = 0,
  z = 0,
}: Props) {
  const style = {
    "--x": at.x,
    "--y": at.y,
    "--w": at.w,
    "--x-sm": sm?.x,
    "--y-sm": sm?.y,
    "--w-sm": sm?.w,
    "--tilt": `${tilt}deg`,
    "--i": i,
    "--float-delay": `-${floatDelay}s`,
    zIndex: z,
  } as CSSProperties

  return (
    <div
      aria-hidden
      style={style}
      className={cn(
        "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2",
        sm
          ? "top-(--y-sm) left-(--x-sm) w-(--w-sm) lg:top-(--y) lg:left-(--x) lg:w-(--w)"
          : "top-(--y) left-(--x) hidden w-(--w) lg:block",
      )}
    >
      <div className="reveal">
        <div className="float">
          <figure className="pointer-events-auto m-0 grid justify-items-center gap-2 rotate-(--tilt) drop-shadow-object transition-[rotate,scale,filter] duration-[350ms] ease-out-expo hover:rotate-0 hover:scale-[1.04] hover:drop-shadow-[0_26px_28px_rgba(4,69,144,0.3)]">
            {print ? (
              <div className="rounded-md bg-card p-[clamp(5px,1.1vw,16px)]">
                <Image
                  src={src}
                  alt=""
                  width={width}
                  height={height}
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  className="h-auto w-full rounded-[4px]"
                />
              </div>
            ) : (
              <Image
                src={src}
                alt=""
                width={width}
                height={height}
                sizes="(min-width: 1024px) 20vw, 34vw"
                className="h-auto w-full"
              />
            )}
            {caption && (
              <figcaption className="hidden text-body-lg text-ink lg:block">{caption}</figcaption>
            )}
          </figure>
        </div>
      </div>
    </div>
  )
}
