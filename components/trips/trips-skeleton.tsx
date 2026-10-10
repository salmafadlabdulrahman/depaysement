const bar = "rounded-full bg-ink/[0.06]"

export function TripsSkeleton() {
  return (
    <div aria-busy aria-label="Loading trips" role="status">
      <div className={`${bar} h-11 w-56`} />
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((n) => (
          <div
            key={n}
            className={`animate-pulse rounded-card bg-white p-2 ${n === 1 ? "hidden md:block" : ""} ${n === 2 ? "hidden lg:block" : ""}`}
          >
            <div className="aspect-[3/2] rounded-[24px] bg-ink/[0.06]" />
            <div className="grid gap-2.5 px-3 pt-4 pb-4">
              <div className={`${bar} h-5 w-28`} />
              <div className={`${bar} h-3 w-44`} />
              <div className="mt-1 flex gap-2">
                <div className={`${bar} h-6 w-16`} />
                <div className={`${bar} h-6 w-20`} />
                <div className={`${bar} h-6 w-14`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
