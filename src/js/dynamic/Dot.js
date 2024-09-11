import Component from './Component';
import { createContainerElement } from './elements';

class Dot extends Component {
  _parentContainer = document.querySelector('.reviews__dots');

  _createElement(slide) {
    const dot = createContainerElement(
      'div',
      `review__dot dot ${slide === 0 ? 'dot--active' : ''}`,
      [],
      { 'data-slide': slide }
    );

    return dot;
  }
}

export default new Dot();
