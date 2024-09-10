export function addHandlerMoreArticles(handler) {
  const moreArticles = document.querySelector('.articles__btn');

  moreArticles.addEventListener('click', handler);
}

export function addEventNavBar() {
  const navBar = document.querySelector('.nav');

  navBar.addEventListener('click', (e) => {
    const option = e.target.closest('.nav__option');

    if (!option) return;

    const section = document.querySelector(`.${option.dataset.section}`);

    section.scrollIntoView({ behavior: 'smooth' });
  });
}
