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

export function createPartner(parent, partner) {
  const partnerLabel = createTextElement(
    'p',
    'label-regular text-grey-2',
    partner.label
  );
  const partnerName = createTextElement('p', 'subtitle', partner.name);
  const partnerText = createContainerElement(
    'div',
    'partner__text',
    partnerName,
    partnerLabel
  );

  const partnerImage = createImageElement(
    `${parent}__partner-image partner__image`,
    partner.image
  );

  const partnerContainer = createContainerElement(
    'div',
    `${parent}__partner partner`,
    partnerImage,
    partnerText
  );

  return partnerContainer;
}
