export function addHandlerMoreArticles(handler) {
  const moreArticles = document.querySelector('.articles__btn');

  moreArticles.addEventListener('click', handler);
}
