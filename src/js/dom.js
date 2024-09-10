export function addHandlerFilters(handler) {
  const filtersContainer = document.querySelector('.features__filters');

  filtersContainer.addEventListener('click', (e) => {
    const filter = e.target.closest('.btn--filter');

    if (!filter) return;

    const filters = document.querySelectorAll('.btn--filter');

    filters.forEach((filt) => {
      filt.classList.remove('btn--filter-selected');
    });

    filter.classList.add('btn--filter-selected');

    handler(filter.dataset.filter);
  });
}

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
