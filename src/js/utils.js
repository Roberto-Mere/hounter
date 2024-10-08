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

export async function asyncRequest(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
}

export function chooseRandomItems(items, numberOfItems) {
  const randomItems = [];

  while (randomItems.length < numberOfItems) {
    const randomNumber = Math.floor(Math.random() * items.length);
    const choice = items[randomNumber];

    if (!randomItems.includes(choice)) {
      randomItems.push(choice);
    }
  }

  return randomItems;
}
