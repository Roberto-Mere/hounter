import { createHeroFeatures, createHouseFeatures } from './dom';
import { data } from './data';

function init() {
  createHeroFeatures(data.heroFeatures);
  createHouseFeatures(data.houseFeatures);
}

init();
