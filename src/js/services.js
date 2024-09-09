import { asyncRequest, chooseRandomItems } from './utils';
import { API_URL, ARTICLES_PER_RENDER } from './config';

export const state = {
  heroFeatures: [],
  houseFeatures: [],
  reviews: [],
  articles: {
    all: [],
    current: 0,
    perRender: ARTICLES_PER_RENDER,
  },
};

export async function loadHeroFeatures() {
  try {
    const data = await asyncRequest(`${API_URL}/heroFeatures`);

    state.heroFeatures = data.map((feat) => {
      return {
        id: feat.id,
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
        id: feat.id,
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
        id: rev.id,
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

function createArticleObject(article) {
  return {
    id: article.id,
    image: article.image,
    title: article.title,
    description: article.description,
    user: {
      image: article.user.image,
      name: article.user.name,
    },
    info: article.info,
  };
}

export async function loadArticles() {
  try {
    const data = await asyncRequest(`${API_URL}/articles`);

    state.articles.all = chooseRandomItems(data, state.articles.perRender).map(
      (art) => createArticleObject(art)
    );
  } catch (err) {
    throw err;
  }
}

export async function loadMoreArticles() {
  const data = await asyncRequest(`${API_URL}/articles`);

  state.articles.all = [
    ...state.articles.all,
    ...chooseRandomItems(data, state.articles.perRender).map((art) =>
      createArticleObject(art)
    ),
  ];
}

export function getCurrentArticle(id) {
  const currentArticle = state.articles.all.find((art) => art.id === id);

  state.articles.current = currentArticle;
}
