"use client"

import { useId, useState } from "react"
import { CircleAlert, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

type FieldProps = Omit<React.ComponentProps<"input">, "id"> & {
  label: string
  error?: string
}

export function Field({ label, error, type = "text", className, ...props }: FieldProps) {
  const id = useId()
  const errorId = `${id}-error`
  const [visible, setVisible] = useState(false)
  const isPassword = type === "password"

  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          "flex h-14 cursor-text items-center gap-2 rounded-input border bg-white px-4 transition-shadow",
          "focus-within:border-iris focus-within:ring-2 focus-within:ring-iris/30",
          // browser autofill tints only the <input> box; tint the whole field instead
          "has-[input:autofill]:bg-canvas",
          error ? "border-danger" : "border-hairline",
        )}
      >
        <span className="flex min-w-0 flex-1 flex-col">
          <span className={cn("text-xs", error ? "text-danger" : "text-graphite")}>{label}</span>
          <input
            id={id}
            type={isPassword && visible ? "text" : type}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "w-full bg-transparent text-sm text-ink outline-none placeholder:text-fog",
              // Chrome ignores background-color on autofill; paint over it with the field's tint
              "autofill:shadow-[inset_0_0_0_1000px_var(--canvas)] autofill:[-webkit-text-fill-color:var(--ink)]",
              className,
            )}
            {...props}
          />
        </span>
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="rounded-full p-1 text-graphite hover:text-ink cursor-pointer"
          >
            {visible ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
          </button>
        )}
      </label>
      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
          <CircleAlert className="size-4" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}
