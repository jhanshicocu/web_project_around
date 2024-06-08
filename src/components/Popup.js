export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupSelector.querySelector(
      ".popup__close-icon-image"
    );

    this.setEventListeners();
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape" && "popup_opened") {
      this.close();
    }
  }
  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__overlay")) {
        this.close();
      }
    });
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
