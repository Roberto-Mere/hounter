function createPartner(parent, partner) {
  // Create elements

  const partnerContainer = document.createElement('div');
  const partnerImage = document.createElement('img');
  const partnerText = document.createElement('div');
  const partnerName = document.createElement('p');
  const partnerLabel = document.createElement('p');

  // Add attributes and content

  partnerContainer.className = `${parent}__partner`;
  partnerImage.className = `${parent}__partner-image`;
  partnerText.className = `${parent}__partner-text`;
  partnerName.className = 'subtitle';
  partnerLabel.className = 'label-regular text-grey-2';

  partnerImage.src = partner.image;
  partnerName.textContent = partner.name;
  partnerLabel.textContent = partner.label;

  // Append elements

  partnerText.append(partnerName, partnerLabel);
  partnerContainer.append(partnerImage, partnerText);

  return partnerContainer;
}

export default createPartner;
