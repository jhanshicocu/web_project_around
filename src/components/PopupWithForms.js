import Popup from "./Popup.js";
export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form = this._popupSelector.querySelector(".popup__form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
  _getInputValues() {
    this._form = this._popupSelector.querySelector(".popup__form");
    this._formValues = {};
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  close() {
    super.close();
    this._form = this._popupSelector.querySelector(".popup__form");
    this._form.reset();
  }
}
