export function parseExtractedCurrencyValue(raw: string | number | null | undefined): number {
    if (!raw) return 0;
  
    if (typeof raw === 'number') {
      return raw > 999 ? raw / 100 : raw;
    }
  
    const cleaned = raw.replace(/\s/g, '').replace(/\./g, '').replace(',', '.');
    const numeric = parseFloat(cleaned);
  
    return numeric > 999 ? numeric / 100 : numeric;
  }
  