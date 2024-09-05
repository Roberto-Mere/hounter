import createHeroFeature from './dynamic/createHeroFeature';

export function createHeroFeatures(features) {
  const heroImage = document.querySelector('.header__hero-image');
  const heroFeatures = document.createElement('div');

  heroFeatures.className = 'header__hero-features';

  features.forEach((feat) => {
    heroFeatures.append(createHeroFeature(feat));
  });

  heroImage.append(heroFeatures);
}
