import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, link) {
    super.open();
    this._popupSelector.querySelector(".popup-image").src = link;
    this._popupSelector.querySelector(".popup-image").alt = "Image de :" + name;
    this._popupSelector.querySelector(".popup__title-image").textContent = name;
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
