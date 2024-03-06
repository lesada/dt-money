function formatToCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })
    .format(value)
    .replace("$", "$ ");
}

export default formatToCurrency;
