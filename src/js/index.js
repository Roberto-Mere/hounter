import * as services from './services';
import * as dom from './dom';
import HeroFeature from './dynamic/HeroFeature';
import HouseFeature from './dynamic/HouseFeature';
import Review from './dynamic/Review';
import ArticlePreview from './dynamic/ArticlePreview';
import Article from './dynamic/Article';

async function handleHeroFeatures() {
  await services.loadHeroFeatures();

  services.state.heroFeatures.forEach((feat) => {
    HeroFeature.render(feat);
  });
}

async function handleHouseFeatures() {
  await services.loadHouseFeatures();

  services.state.houseFeatures.forEach((feat) => {
    HouseFeature.render(feat);
  });
}

async function handleReviews() {
  await services.loadReviews();

  services.state.reviews.forEach((rev) => {
    Review.render(rev);
  });
}

async function handleArticle() {
  await services.loadArticles();

  const currentArticle =
    services.state.articles.all[services.state.articles.current];

  Article.render(currentArticle);
  services.state.articles.all.forEach((art) => {
    ArticlePreview.render(art);
  });
}

async function handleMoreArticles() {
  await services.loadMoreArticles();

  const articles = services.state.articles;

  articles.all
    .slice(articles.all.length - articles.perRender)
    .forEach((art) => {
      ArticlePreview.render(art);
    });
}

async function handleArticlePreview(id) {
  services.getCurrentArticle(id);

  Article.clear();
  Article.render(services.state.articles.current);
}

function init() {
  HeroFeature.addHandlerRender(handleHeroFeatures);
  HouseFeature.addHandlerRender(handleHouseFeatures);
  Review.addHandlerRender(handleReviews);
  Article.addHandlerRender(handleArticle);
  ArticlePreview.addHandlerClick(handleArticlePreview);
  dom.addHandlerMoreArticles(handleMoreArticles);
  dom.addEventNavBar();
}

init();
