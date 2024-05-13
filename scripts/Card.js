export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__name").textContent = this._name;
    this._element.querySelector(".element__image").alt = this._name;
    this._setEventListeners();

    return this._element;
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
        this._handleOpenCardClick();
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
  _handleOpenCardClick() {
    const popUpImage = document.querySelector("#popup-image");
    popUpImage.classList.add("popup_opened");
    popUpImage.querySelector(".popup-image").src = this._link;
    popUpImage.querySelector(".popup-image").alt = "Image de :" + this._name;
    popUpImage.querySelector(".popup__title-image").textContent = this._name;
  }
}
