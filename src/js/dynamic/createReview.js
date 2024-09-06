import createPartner from './createPartner';

function createReview({ image, title, description, partner, rating }) {
  // Create elements

  const reviewContainer = document.createElement('div');

  const reviewImage = document.createElement('img');

  const reviewContent = document.createElement('div');

  const reviewText = document.createElement('div');
  const reviewTitle = document.createElement('h4');
  const reviewDescription = document.createElement('p');

  const reviewInfo = document.createElement('div');
  const reviewPartner = createPartner('review', partner);
  const reviewRating = document.createElement('div');
  const reviewRatingIcon = document.createElement('img');
  const reviewRatingScore = document.createElement('h4');

  // Add attributes and content

  reviewContainer.className = 'review';

  reviewImage.className = 'review__image';

  reviewContent.className = 'review__content';

  reviewText.className = 'review__text';
  reviewTitle.className = 'heading-th';
  reviewDescription.className = 'label-regular text-grey-3';

  reviewInfo.className = 'review__info';
  reviewRating.className = 'review__rating';
  reviewRatingScore.className = 'heading-th';

  reviewImage.src = image;

  reviewTitle.textContent = title;
  reviewDescription.textContent = description;

  reviewRatingIcon.src = 'src/assets/svg/star.svg';
  reviewRatingScore.textContent = rating;

  // Append elements

  reviewText.append(reviewTitle, reviewDescription);

  reviewRating.append(reviewRatingIcon, reviewRatingScore);
  reviewInfo.append(reviewPartner, reviewRating);

  reviewContent.append(reviewText, reviewInfo);

  reviewContainer.append(reviewImage, reviewContent);

  return reviewContainer;
}

export default createReview;
