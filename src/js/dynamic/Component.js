class Component {
  render(data) {
    this._parentContainer.append(this._createElement(data));
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default Component;
