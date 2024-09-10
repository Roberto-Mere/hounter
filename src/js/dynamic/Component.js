class Component {
  render(data) {
    this._parentContainer.append(this._createElement(data));
  }

  clear() {
    this._parentContainer.innerHTML = '';
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default Component;
