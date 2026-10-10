import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

/** Flat four-point sparkle in a palette colour. Purely decorative. */
export function Sparkle({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      style={style}
      className={cn("absolute", className)}
      fill="currentColor"
    >
      <path d="M12 0c.9 6.9 5.100 11.100 12 12-6.900.9-11.100 5.100-12 12-.9-6.900-5.100-11.100-12-12 6.900-.9 11.100-5.100 12-12Z" />
    </svg>
  )
}
