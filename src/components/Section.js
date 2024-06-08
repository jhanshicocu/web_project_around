export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
  }
  rendererItem() {
    this._items.forEach((item) => {
      const card = this._renderer(item);
      this.addItem(card);
    });
  }
  addItem(element) {
    this._selector.append(element);
  }
}
