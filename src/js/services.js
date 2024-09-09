import { asyncRequest, chooseRandomItems } from './utils';
import { API_URL, ARTICLES_LIMIT } from './config';

export const state = {
  heroFeatures: [],
  houseFeatures: [],
  reviews: [],
  articles: {
    all: [],
    current: 1,
    limit: ARTICLES_LIMIT,
  },
};

export async function loadHeroFeatures() {
  try {
    const data = await asyncRequest(`${API_URL}/heroFeatures`);

    state.heroFeatures = data.map((feat) => {
      return {
        title: feat.title,
        label: feat.label,
        images: feat.images,
      };
    });
  } catch (err) {
    throw err;
  }
}

export async function loadHouseFeatures() {
  try {
    const data = await asyncRequest(`${API_URL}/houseFeatures`);

    state.houseFeatures = data.map((feat) => {
      return {
        image: feat.image,
        label: feat.label,
        title: feat.title,
        price: feat.price,
        partner: {
          image: feat.partner.image,
          name: feat.partner.name,
          label: feat.partner.label,
        },
      };
    });
  } catch (err) {
    throw err;
  }
}

export async function loadReviews() {
  try {
    const data = await asyncRequest(`${API_URL}/reviews`);

    state.reviews = data.map((rev) => {
      return {
        image: rev.image,
        title: rev.title,
        description: rev.description,
        rating: rev.rating,
        partner: {
          image: rev.partner.image,
          name: rev.partner.name,
          label: rev.partner.label,
        },
        id: rev.id,
      };
    });
  } catch (err) {
    throw err;
  }
}

export async function loadArticles() {
  try {
    const data = await asyncRequest(`${API_URL}/articles`);

    state.articles.all = chooseRandomItems(data, state.articles.limit).map(
      (art) => {
        return {
          image: art.image,
          title: art.title,
          description: art.description,
          user: {
            image: art.user.image,
            name: art.user.name,
          },
          info: art.info,
        };
      }
    );
  } catch (err) {
    throw err;
  }
}
