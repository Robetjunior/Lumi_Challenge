export function parseExtractedCurrencyValue(raw: string | number | null | undefined): number {
  if (!raw) return 0;

  if (typeof raw === 'number') return raw;

  const cleaned = raw.replace(/\s/g, '').replace(/\./g, '').replace(',', '.');
  const numeric = parseFloat(cleaned);

  return isNaN(numeric) ? 0 : numeric;
}
