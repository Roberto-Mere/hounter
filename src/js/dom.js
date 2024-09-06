import createHeroFeature from './dynamic/createHeroFeature';
import createHouseFeature from './dynamic/createHouseFeature';
import createReview from './dynamic/createReview';

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

export function createReviews(reviews) {
  const parentContainer = document.querySelector('.reviews');
  const houseReviews = document.createElement('div');

  houseReviews.className = 'reviews__house-reviews';

  reviews.forEach((rev) => {
    houseReviews.append(createReview(rev));
  });

  parentContainer.append(houseReviews);
}
