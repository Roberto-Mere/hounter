export function addHandlerFilters(handler) {
  const filtersContainer = document.querySelector('.features__filters');

  filtersContainer.addEventListener('click', (e) => {
    const filter = e.target.closest('.btn--filter');

    if (!filter) return;

    const filters = document.querySelectorAll('.btn--filter');
    const houseFeatures = document.querySelector('.features__house-features');
    const btnLeft = document.querySelector('.btn--arrow-left');
    const btnRight = document.querySelector('.btn--arrow-right');

    filters.forEach((filt) => {
      filt.classList.remove('btn--filter-selected');
    });

    filter.classList.add('btn--filter-selected');

    houseFeatures.removeAttribute('style');
    btnLeft.dataset.slide = -1;
    btnRight.dataset.slide = 1;

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

export function addEventArrows() {
  const houseFeatures = document.querySelector('.features__house-features');
  const btnLeft = document.querySelector('.btn--arrow-left');
  const btnRight = document.querySelector('.btn--arrow-right');

  function goToSlide(slide) {
    houseFeatures.style.transform = `translateX(${
      0 - (slide * 100) / houseFeatures.childElementCount
    }%)`;
  }

  btnLeft.addEventListener('click', () => {
    const slide = btnLeft.dataset.slide;

    if (slide < 0) return;
    btnLeft.dataset.slide = +slide - 1;
    btnRight.dataset.slide = +btnRight.dataset.slide - 1;

    goToSlide(slide);
  });

  btnRight.addEventListener('click', () => {
    const slide = btnRight.dataset.slide;

    if (slide > houseFeatures.childElementCount - 1) return;

    btnRight.dataset.slide = +slide + 1;
    btnLeft.dataset.slide = +btnLeft.dataset.slide + 1;

    goToSlide(slide);
  });
}

export function addEventOpenModal() {
  const subscribeButton = document.querySelector('.subscribe__btn');
  const modalOverlay = document.querySelector('.modal__overlay');

  subscribeButton.addEventListener('click', () => {
    const input = document.querySelector('.subscribe__input');
    const email = document.querySelector('.subscribe__email');
    const error = document.querySelector('.subscribe__email-error');

    if (email.validity.typeMismatch || email.value === '') {
      input.classList.add('input--error');
      error.textContent = 'Please provide a valid email';
      return;
    }

    input.classList.remove('input--error');
    error.textContent = '';
    email.value = '';

    modalOverlay.style.visibility = 'visible';
  });
}

export function addEventCloseModal() {
  const closeModalButton = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.modal__overlay');

  closeModalButton.addEventListener('click', () => {
    modalOverlay.style.visibility = 'hidden';
  });
}
