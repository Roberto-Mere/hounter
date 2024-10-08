import Component from './Component';
import {
  createContainerElement,
  createImageElement,
  createTextElement,
  createPartner,
} from './elements';

class Review extends Component {
  _parentContainer = document.querySelector('.reviews__house-reviews');

  _interval;

  _intervalFunction() {
    const dots = document.querySelector('.reviews__dots');
    const currSlide = +document.querySelector('.dot--active').dataset.slide;
    let nextSlide;

    if (currSlide === dots.childElementCount - 1) {
      nextSlide = 0;
    } else {
      nextSlide = currSlide + 1;
    }

    const nextDot = document.querySelector(`.dot[data-slide="${nextSlide}"]`);
    nextDot.click();
  }

  _createElement({ image, title, description, partner, rating }) {
    const reviewImage = createImageElement('review__image', image);

    const reviewTitle = createTextElement('h4', 'heading-th', title);
    const reviewDescription = createTextElement(
      'p',
      'label-regular text-grey-3',
      description
    );
    const reviewText = createContainerElement('div', 'review__text', [
      reviewTitle,
      reviewDescription,
    ]);

    const reviewPartner = createPartner('review', partner);
    const reviewRatingIcon = createImageElement('', 'src/assets/svg/star.svg');
    const reviewRatingScore = createTextElement('h4', 'heading-th', rating);
    const reviewRating = createContainerElement('div', 'review__rating', [
      reviewRatingIcon,
      reviewRatingScore,
    ]);
    const reviewInfo = createContainerElement('div', 'review__info', [
      reviewPartner,
      reviewRating,
    ]);

    const reviewContent = createContainerElement('div', 'review__content', [
      reviewText,
      reviewInfo,
    ]);

    const reviewContainer = createContainerElement('div', 'review', [
      reviewImage,
      reviewContent,
    ]);

    return reviewContainer;
  }

  addTimerSlider() {
    this._interval = setInterval(this._intervalFunction, 12500);
  }

  resetTimerSlider() {
    clearInterval(this._interval);
    this._interval = setInterval(this._intervalFunction, 12500);
  }
}

export default new Review();
