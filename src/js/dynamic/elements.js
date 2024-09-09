function createElement(type, attributes, ...elements) {
  // Create element

  const element = document.createElement(type);

  // Add attributes

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }

  // Append elements

  elements.forEach((el) => {
    element.append(el);
  });

  return element;
}

export function createTextElement(type, className, textContent, attributes) {
  const text = document.createTextNode(textContent);
  const textElement = createElement(
    type,
    {
      class: className,
      ...attributes,
    },
    text
  );

  return textElement;
}

export function createImageElement(className, src, attributes) {
  const imageElement = createElement('img', {
    class: className,
    src,
    ...attributes,
  });

  return imageElement;
}

export function createContainerElement(type, className, elements, attributes) {
  const conatinerElement = createElement(
    type,
    { class: className, ...attributes },
    ...elements
  );

  return conatinerElement;
}

export function createUser({ image, name }) {
  const userImage = createImageElement('user__image', image);
  const userName = createTextElement('p', 'label-regular text-grey-3', name);

  const userContainer = createContainerElement('div', 'user', [
    userImage,
    userName,
  ]);

  return userContainer;
}

export function createArticleInfo({ readTime, date }) {
  const articleInfoIcon = createImageElement(
    'article-info__icon',
    'src/assets/svg/time.svg'
  );
  const articleInfoText = createTextElement(
    'p',
    'label-regular text-grey-2',
    `${readTime} min read | ${new Date(date).toDateString().slice(4)}`
  );
  const articleInfoContainer = createContainerElement('div', 'article-info', [
    articleInfoIcon,
    articleInfoText,
  ]);

  return articleInfoContainer;
}

export function createPartner(parent, { label, name, image }) {
  const partnerLabel = createTextElement(
    'p',
    'label-regular text-grey-2',
    label
  );
  const partnerName = createTextElement('p', 'subtitle', name);
  const partnerText = createContainerElement('div', 'partner__text', [
    partnerName,
    partnerLabel,
  ]);

  const partnerImage = createImageElement(
    `${parent}__partner-image partner__image`,
    image
  );

  const partnerContainer = createContainerElement(
    'div',
    `${parent}__partner partner`,
    [partnerImage, partnerText]
  );

  return partnerContainer;
}
