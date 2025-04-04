export const extractTextByRegex = (text: string, regex: RegExp): string | null => {
    const match = text.match(regex);
    return match ? match[1] : null; 
  };
  
  export const extractNumberByRegex = (text: string, regex: RegExp): number | null => {
    const match = text.match(regex);
    if (match) {
      const number = parseFloat(match[1].replace(',', '.'));
      return isNaN(number) ? null : number;
    }
    return null;
  };