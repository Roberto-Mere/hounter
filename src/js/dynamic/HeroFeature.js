import Component from './Component';
import {
  createContainerElement,
  createImageElement,
  createTextElement,
} from './elements';

class HeroFeature extends Component {
  _parentContainer = document.querySelector('.marquee__content');

  _createElement({ title, label, images }) {
    const featureLabel = createTextElement(
      'p',
      'label-small text-grey-2',
      label
    );
    const featureTitle = createTextElement('p', 'body-semibold', title);
    const featureText = createContainerElement('div', 'hero-feature__text', [
      featureTitle,
      featureLabel,
    ]);

    const imageElements = [];
    images.forEach((img) => {
      const featureImage = createImageElement('hero-feature__image', img);

      imageElements.push(featureImage);
    });
    const featureImages = createContainerElement(
      'figure',
      'hero-feature__images',
      imageElements
    );

    const featureContainer = createContainerElement('div', 'hero-feature', [
      featureImages,
      featureText,
    ]);

    return featureContainer;
  }

  renderMirror(data) {
    const mirrorParentElement =
      document.querySelectorAll('.marquee__content')[1];

    mirrorParentElement.append(this._createElement(data));
  }
}
export default new HeroFeature();
