function createElement(type, attributes, ...elements) {
  // Create element

  const element = document.createElement(type);

  // Add attributes and content

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element[key] = value;
    }
  }

  // Append elements

  elements.forEach((el) => {
    element.append(el);
  });

  return element;
}

export function createTextElement(type, className, textContent) {
  const textElement = createElement(type, { className, textContent });

  return textElement;
}

export function createImageElement(className, src) {
  const imageElement = createElement('img', { className, src });

  return imageElement;
}

export function createContainerElement(type, className, ...elements) {
  const conatinerElement = createElement(type, { className }, ...elements);

  return conatinerElement;
}
