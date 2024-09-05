function createHeroFeature(title, label, ...images) {
  // Create elements

  const featureContainer = document.createElement('div');

  const featureImages = document.createElement('figure');
  const imageElements = [];
  images.forEach((img) => {
    const featureImage = document.createElement('img');

    featureImage.className = 'hero-feature__image';

    featureImage.src = img;

    imageElements.push(featureImage);
  });

  const featureText = document.createElement('div');
  const featureTitle = document.createElement('p');
  const featureLabel = document.createElement('p');

  // Add attributes and content

  featureContainer.className = 'hero-feature';

  featureImages.className = 'hero-feature__images';
  featureText.className = 'hero-feature__text';
  featureTitle.className = 'body-semibold';
  featureLabel.className = 'label-small text-grey-2';

  featureTitle.textContent = title;
  featureLabel.textContent = label;

  // Append elements

  featureImages.append(...imageElements);
  featureText.append(featureTitle, featureLabel);

  featureContainer.append(featureImages, featureText);

  return featureContainer;
}

export default createHeroFeature;
