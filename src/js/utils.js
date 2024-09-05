export function formatNumber(number) {
  let formattedNumber = '';
  const stringNumber = number.toString();

  for (let i = stringNumber.length - 1; i >= 0; i -= 1) {
    const curr = stringNumber.length - 1 - i;

    // Add '.' in front of current string for every 3 digits

    if (curr !== 0 && curr % 3 === 0) {
      formattedNumber = '.' + formattedNumber;
    }

    formattedNumber = stringNumber[i] + formattedNumber;
  }

  return formattedNumber;
}
