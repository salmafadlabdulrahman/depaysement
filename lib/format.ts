const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return { y, m: m - 1, d }
}

/**
 * "14–21 Nov", "28 Aug – 3 Sep", and "2–8 Feb 2027" when the trip ends in another year.
 * Parsed by hand (no Date) so the result never shifts with the time zone.
 */
export function formatDateRange(startIso: string, endIso: string, currentYear: number) {
  const s = parts(startIso)
  const e = parts(endIso)
  const year = e.y !== currentYear ? ` ${e.y}` : ""

  if (s.y === e.y && s.m === e.m) {
    return s.d === e.d ? `${e.d} ${MONTHS[e.m]}${year}` : `${s.d}–${e.d} ${MONTHS[e.m]}${year}`
  }
  const startYear = s.y !== e.y ? ` ${s.y}` : ""
  return `${s.d} ${MONTHS[s.m]}${startYear} – ${e.d} ${MONTHS[e.m]}${year}`
}

export function plural(n: number, one: string, many = `${one}s`) {
  return `${n} ${n === 1 ? one : many}`
}
