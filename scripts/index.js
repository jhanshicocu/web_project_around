import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Cochabamba",
    link: "https://media.istockphoto.com/id/1151575875/photo/views-of-the-city-of-cochabamba-from-the-cerro-de-san-pedro-in-bolivia.webp?b=1&s=170667a&w=0&k=20&c=wAZ3Ks9GmzCzXi3Lz7G-qEmGKaiI1ksRYLlc3HX5Zqk=",
  },
  {
    name: "Stockholm",
    link: "https://media.istockphoto.com/id/1451426830/photo/central-stockholm-at-dusk.webp?b=1&s=170667a&w=0&k=20&c=do_SA8nhBc1bQW_KEXnMaKKBlQ3hK7DWXyxNJslsLbM=",
  },
  {
    name: "Trento",
    link: "https://media.istockphoto.com/id/1492085891/photo/trento-aerial-panoramic-view.webp?b=1&s=170667a&w=0&k=20&c=sB2YwjJjAdbnco-uBfo_a1acKgeUEAFVGfYw5RKuZrg=",
  },
  {
    name: "Venezia",
    link: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuZXppYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Irish",
    link: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXJpc2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Praga",
    link: "https://media.istockphoto.com/id/1279996091/photo/prague-astronomical-clock-in-old-town-square-at-dawn-czech-republic.webp?b=1&s=170667a&w=0&k=20&c=vUJmB2vYw_0gHF-3lpmA4A5aXZC-yCxXNf8WuJKsmV0=",
  },
];

const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__info-name");
const profileInfo = document.querySelector(".profile__info-description");

const popUp = document.querySelector(".popup");
const formContainer = document.querySelector(".popup__container");
const popUpOverlay = document.querySelector(".popup__overlay");

const buttonClosePopUp = popUp.querySelector(".popup__close-icon-image");
const formPopUp = popUp.querySelector(".popup__form");
const nameInput = popUp.querySelector(".popup__input-name");
const jobInput = popUp.querySelector(".popup__input-description");

const buttonAddCard = document.querySelector(".profile__add-button-image");

const popUpCard = document.querySelector("#popup-add-card");
const buttonClosePopUpCard = document.querySelector("#popup-close-card");
const formPopUpCard = document.querySelector("#popup-add-card-form");
const titleInput = document.querySelector("#input-title");
const urlInput = document.querySelector("#input-url");

const elementsArea = document.querySelector(".elements");

const popUpImage = document.querySelector("#popup-image");
const buttonClosePopUpImage = document.querySelector("#popup-close-image");

const formEditProfile = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formAddCards = {
  formSelector: "#popup-add-card-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//creacion de nuevas targetas y inserimento
function handleAddCard(evt) {
  evt.preventDefault();
  const cardNode = new Card(
    { name: titleInput.value, link: urlInput.value },
    ".template-card_type_default"
  );
  elementsArea.prepend(cardNode.generateCard());
  titleInput.value = "";
  urlInput.value = "";
  popUpCard.classList.remove("popup_opened");
}
//iniciacion targetas
initialCards.forEach((item) => {
  const card = new Card(item, ".template-card_type_default");
  const cardElement = card.generateCard();
  document.querySelector(".elements").append(cardElement);
});
//interatividad formulario perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popUp.classList.remove("popup_opened");
}
//validacion formularios
const validateFormProfile = new FormValidator(formPopUp, formEditProfile);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(popUpCard, formAddCards);
validateFormCard.enableValidation();

//abrir y cerrar formulario perfil
function openPopUp() {
  popUp.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}
function closePopUp() {
  popUp.classList.remove("popup_opened");
}

//abrir y cerrar formulario card
function openPopUpCard() {
  popUpCard.classList.add("popup_opened");
}
function closePopUpCard() {
  popUpCard.classList.remove("popup_opened");
}
function closePopUpImage() {
  popUpImage.classList.remove("popup_opened");
}

//eventos de abrir y cerrar, formulario perfil
buttonEditProfile.addEventListener("click", openPopUp);
buttonClosePopUp.addEventListener("click", closePopUp);
formPopUp.addEventListener("submit", handleProfileFormSubmit);
//eventos de abrir y cerrar, formulario de card
buttonAddCard.addEventListener("click", openPopUpCard);
buttonClosePopUpCard.addEventListener("click", closePopUpCard);
formPopUpCard.addEventListener("submit", handleAddCard);
//evento cerrar popup image
buttonClosePopUpImage.addEventListener("click", closePopUpImage);

//cierre documento con teclado esc
document.addEventListener("keydown", keyScape);
function keyScape(evt) {
  const keyUser = evt.key;
  if (keyUser === "Escape" && "popup_opened") {
    closePopUp();
    closePopUpCard();
    closePopUpImage();
    evt.target.removeEventListener("keydown", keyScape);
  }
}
//eventos de cerrar popup con un click en el popup
//cierre ventana con clic en la superposicion
const popUpOverlayList = Array.from(
  document.querySelectorAll(".popup__overlay")
);
popUpOverlayList.forEach((popUpOverlayElement) => {
  popUpOverlayElement.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__overlay")) {
      closePopUp();
      closePopUpCard();
      closePopUpImage();
    }
  });
});
