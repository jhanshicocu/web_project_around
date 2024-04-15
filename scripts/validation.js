//muestra mensaje error
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const buttonList = Array.from(document.querySelectorAll(".popup__button"));
  buttonList.forEach((buttonElement) => {
    buttonElement.classList.add("popup__button_disabled");
  });
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};
//esconde mensaje error
const hideInputError = (formElement, inputElement, settings) => {
  const buttonList = Array.from(document.querySelectorAll(".popup__button"));
  buttonList.forEach((buttonElement) => {
    buttonElement.classList.remove("popup__button_disabled");
  });
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};
//decide si mostrar o ocultar mensaje del input valor
const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

//ejecutar en los formulario
const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
    });
  });
};

//ejecuta toda la logica
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};
//configuracion formulario cards
const formAddCards = {
  formSelector: "#popup-add-card-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
//configuracion formulario profile
const formEditProfile = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
enableValidation(formEditProfile);
enableValidation(formAddCards);
