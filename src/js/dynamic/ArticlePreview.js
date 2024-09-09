import Component from './Component';
import {
  createArticleInfo,
  createContainerElement,
  createImageElement,
  createTextElement,
  createUser,
} from './elements';

class ArticlePreview extends Component {
  _parentContainer = document.querySelector('.articles__previews');

  _createElement({ image, title, user, info, id }) {
    const articleImage = createImageElement('article-preview__image', image);

    const articleUser = createUser(user);

    const articleTitle = createTextElement('p', 'subtitle', title);

    const articleInfo = createArticleInfo(info);

    const articleContent = createContainerElement(
      'div',
      'article-preview__content',
      [articleUser, articleTitle, articleInfo]
    );

    const articleContainer = createContainerElement(
      'div',
      'article-preview',
      [articleImage, articleContent],
      {
        'data-id': id,
      }
    );

    return articleContainer;
  }
}

export default new ArticlePreview();
