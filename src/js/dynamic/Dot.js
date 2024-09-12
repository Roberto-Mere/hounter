import Component from './Component';
import Review from './Review';
import { createContainerElement } from './elements';

class Dot extends Component {
  _parentContainer = document.querySelector('.reviews__dots');

  _createElement(slide) {
    const dot = createContainerElement('div', `dot`, [], {
      'data-slide': slide,
    });

    return dot;
  }

  addEventClick() {
    const dots = this._parentContainer;

    const activateDot = function (slide) {
      const dot = document.querySelector(`.dot[data-slide="${slide}"]`);

      dots.childNodes.forEach((dot) => dot.classList.remove('dot--active'));
      dot.classList.add('dot--active');
    };

    function goToSlide(slide) {
      const reviews = document.querySelector('.reviews__house-reviews');
      const rateOfChange = 100 / reviews.childElementCount;

      reviews.style.transform = `translateX(${
        rateOfChange - rateOfChange * slide
      }%)`;

      activateDot(slide);
    }

    dots.addEventListener('click', (e) => {
      const dot = e.target.closest('.dot');

      if (!dot) return;

      goToSlide(dot.dataset.slide);
      Review.resetTimerSlider();
    });

    goToSlide(0);
  }
}

export default new Dot();
