export function reverseCurrency(brl: string) {
  const value = brl.split(" ")[1];
  const formattedValue = Number(value.replace(",", "."));

  return formattedValue;
}
