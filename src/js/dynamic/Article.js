import Component from './Component';
import {
  createArticleInfo,
  createContainerElement,
  createImageElement,
  createTextElement,
  createUser,
} from './elements';

class Article extends Component {
  _parentContainer = document.querySelector('.articles__user-articles');

  _createElement({ image, title, description, user, info }) {
    const articleImage = createImageElement('article__image', image);

    const articleUser = createUser(user);

    const articleTitle = createTextElement('h3', 'heading-tertiary', title);

    const articleDescription = createTextElement(
      'p',
      'body-light text-grey-3',
      description
    );

    const articleInfo = createArticleInfo(info);

    const articleContainer = createContainerElement('div', 'article', [
      articleImage,
      articleUser,
      articleTitle,
      articleDescription,
      articleInfo,
    ]);

    return articleContainer;
  }
}

export default new Article();
