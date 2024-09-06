import {
  createContainerElement,
  createImageElement,
  createTextElement,
} from './createElements';

function createHeroFeature({ title, label, images }) {
  const featureLabel = createTextElement('p', 'label-small text-grey-2', label);
  const featureTitle = createTextElement('p', 'body-semibold', title);
  const featureText = createContainerElement(
    'div',
    'hero-feature__text',
    featureTitle,
    featureLabel
  );

  const imageElements = [];
  images.forEach((img) => {
    const featureImage = createImageElement('hero-feature__image', img);

    imageElements.push(featureImage);
  });
  const featureImages = createContainerElement(
    'figure',
    'hero-feature__images',
    ...imageElements
  );

  const featureContainer = createContainerElement(
    'div',
    'hero-feature',
    featureImages,
    featureText
  );

  return featureContainer;
}

export default createHeroFeature;
