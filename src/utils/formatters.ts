export function formatToCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })
    .format(value)
    .replace("$", "$ ");
}

export function formatToShortDate(date: string) {
  return new Intl.DateTimeFormat("en-US").format(new Date(date));
}
