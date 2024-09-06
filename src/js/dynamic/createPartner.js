import {
  createContainerElement,
  createImageElement,
  createTextElement,
} from './createElements';

function createPartner(parent, partner) {
  const partnerLabel = createTextElement(
    'p',
    'label-regular text-grey-2',
    partner.label
  );
  const partnerName = createTextElement('p', 'subtitle', partner.name);
  const partnerText = createContainerElement(
    'div',
    'partner__text',
    partnerName,
    partnerLabel
  );

  const partnerImage = createImageElement(
    `${parent}__partner-image partner__image`,
    partner.image
  );

  const partnerContainer = createContainerElement(
    'div',
    `${parent}__partner partner`,
    partnerImage,
    partnerText
  );

  return partnerContainer;
}

export default createPartner;
