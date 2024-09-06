import { createHeroFeatures, createHouseFeatures, createReviews } from './dom';
import { data } from './data';

function init() {
  createHeroFeatures(data.heroFeatures);
  createHouseFeatures(data.houseFeatures);
  createReviews(data.houseReviews);
}

init();
