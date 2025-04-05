export function parseBrazilianCurrency(value: string | number | undefined | null): number {
  if (!value) return 0;
  const str = typeof value === 'string' ? value : value.toString();
  return parseFloat(str.replace(/\./g, '').replace(',', '.')) || 0;
}
