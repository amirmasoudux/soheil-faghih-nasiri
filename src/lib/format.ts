export function formatPrice(cents: number, currency: string, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export function formatMonthYear(isoMonth: string, locale: string) {
  const [year, month] = isoMonth.split("-").map(Number);
  const date = new Date(Date.UTC(year, (month ?? 1) - 1, 1));
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatCompactNumber(value: number, locale: string) {
  return new Intl.NumberFormat(locale, { notation: "compact" }).format(value);
}
