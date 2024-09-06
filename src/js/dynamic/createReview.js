import {
  createContainerElement,
  createImageElement,
  createTextElement,
} from './createElements';
import createPartner from './createPartner';

function createReview({ image, title, description, partner, rating }) {
  const reviewImage = createImageElement('review__image', image);

  const reviewTitle = createTextElement('h4', 'heading-th', title);
  const reviewDescription = createTextElement(
    'p',
    'label-regular text-grey-3',
    description
  );
  const reviewText = createContainerElement(
    'div',
    'review__text',
    reviewTitle,
    reviewDescription
  );

  const reviewPartner = createPartner('review', partner);
  const reviewRatingIcon = createImageElement('', 'src/assets/svg/star.svg');
  const reviewRatingScore = createTextElement('h4', 'heading-th', rating);
  const reviewRating = createContainerElement(
    'div',
    'review__rating',
    reviewRatingIcon,
    reviewRatingScore
  );
  const reviewInfo = createContainerElement(
    'div',
    'review__info',
    reviewPartner,
    reviewRating
  );

  const reviewContent = createContainerElement(
    'div',
    'review__content',
    reviewText,
    reviewInfo
  );

  const reviewContainer = createContainerElement(
    'div',
    'review',
    reviewImage,
    reviewContent
  );

  return reviewContainer;
}

export default createReview;
