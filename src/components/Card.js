export default class Card {
  constructor(name, link, cardSelector, { handleOpenCardClick }) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleOpenCardClick = handleOpenCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._handleRemoveCardClick();
      });
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => {
        this._handleLikeCardClick();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleOpenCardClick(this._name, this._link);
      });
  }
  _handleRemoveCardClick() {
    this._element.remove();
  }

  _handleLikeCardClick() {
    this._element
      .querySelector(".element__like")
      .classList.toggle("element__like_active");
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__name").textContent = this._name;
    this._element.querySelector(".element__image").alt = this._name;
    this._setEventListeners();

    return this._element;
  }
}
