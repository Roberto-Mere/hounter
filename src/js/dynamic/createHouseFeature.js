import { formatNumber } from '../utils';
import createPartner from './createPartner';

function createHouseFeature({ image, label, title, price, partner }) {
  // Create elements

  const featureContainer = document.createElement('div');

  const featureImage = document.createElement('img');

  const featureLabel = document.createElement('div');
  const featureLabelText = document.createElement('p');
  const featureLabelImage = document.createElement('img');

  const featureText = document.createElement('div');
  const featureTitle = document.createElement('h3');
  const featurePrice = document.createElement('h4');

  const featurePartner = createPartner('house-feature', partner);

  // Add attributes and content

  featureContainer.className = 'house-feature';

  featureImage.className = 'house-feature__image';

  featureLabel.className = `house-feature__label ${
    label === 'Popular'
      ? 'house-feature__label-popular'
      : label === 'New house'
      ? 'house-feature__label-new'
      : 'house-feature__label-deals'
  }`;
  featureLabelText.className = `label-medium ${
    label === 'Popular'
      ? 'text-danger'
      : label === 'New house'
      ? 'text-info'
      : 'text-primary-dark'
  }`;

  featureText.className = 'house-feature__text';
  featureTitle.className = 'heading-tertiary';
  featurePrice.className = 'heading-th text-grey-3';

  featureImage.src = image;

  featureLabelText.textContent = label;
  featureLabelImage.src = `src/assets/svg/${
    label === 'Popular' ? 'popular' : label === 'New house' ? 'new' : 'deals'
  }.svg`;

  featureTitle.textContent = title;
  featurePrice.textContent = `$ ${formatNumber(price)}`;

  // Append elements

  featureLabel.append(featureLabelImage, featureLabelText);

  featureText.append(featureTitle, featurePrice);

  featureContainer.append(
    featureImage,
    featureLabel,
    featureText,
    featurePartner
  );

  return featureContainer;
}

export default createHouseFeature;
