import {
  createContainerElement,
  createImageElement,
  createTextElement,
} from './createElements';
import { formatNumber } from '../utils';
import createPartner from './createPartner';

function createHouseFeature({ image, label, title, price, partner }) {
  const featureImage = createImageElement('house-feature__image', image);

  const featureLabelImage = createImageElement(
    '',
    `src/assets/svg/${
      label === 'Popular' ? 'popular' : label === 'New house' ? 'new' : 'deals'
    }.svg`
  );
  const featureLabelText = createTextElement(
    'p',
    `label-medium ${
      label === 'Popular'
        ? 'text-danger'
        : label === 'New house'
        ? 'text-info'
        : 'text-primary-dark'
    }`,
    label
  );
  const featureLabel = createContainerElement(
    'div',
    `house-feature__label ${
      label === 'Popular'
        ? 'house-feature__label-popular'
        : label === 'New house'
        ? 'house-feature__label-new'
        : 'house-feature__label-deals'
    }`,
    featureLabelImage,
    featureLabelText
  );

  const featurePrice = createTextElement(
    'h4',
    'heading-th text-grey-3',
    `$ ${formatNumber(price)}`
  );
  const featureTitle = createTextElement('h3', 'heading-tertiary', title);
  const featureText = createContainerElement(
    'div',
    'house-feature__text',
    featureTitle,
    featurePrice
  );

  const featurePartner = createPartner('house-feature', partner);

  const featureContainer = createContainerElement(
    'div',
    'house-feature',
    featureImage,
    featureLabel,
    featureText,
    featurePartner
  );

  return featureContainer;
}

export default createHouseFeature;
