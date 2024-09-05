import createHeroFeature from './dynamic/createHeroFeature';
import createHouseFeature from './dynamic/createHouseFeature';

export function createHeroFeatures(features) {
  const parentContainer = document.querySelector('.header__hero-image');
  const heroFeatures = document.createElement('div');

  heroFeatures.className = 'header__hero-features';

  features.forEach((feat) => {
    heroFeatures.append(createHeroFeature(feat));
  });

  parentContainer.append(heroFeatures);
}

export function createHouseFeatures(features) {
  const parentContainer = document.querySelector('.features');
  const houseFeatures = document.createElement('div');

  houseFeatures.className = 'features__house-features';

  features.forEach((feat) => {
    houseFeatures.append(createHouseFeature(feat));
  });

  parentContainer.append(houseFeatures);
}
