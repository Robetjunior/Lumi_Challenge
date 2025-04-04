export const parseNumber = (numStr: string): number => {
    const normalized = numStr.replace(/\./g, '').replace(',', '.');
    return parseFloat(normalized);
  };
  