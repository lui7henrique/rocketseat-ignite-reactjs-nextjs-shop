export const formatCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions
) => {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "brl",
    ...options,
  }).format(value);

  return formatted;
};
