import "./pages/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import { initialCards, elementsArea } from "./components/utils.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForms from "./components/PopupWithForms.js";
import UserInfo from "./components/UserInfo.js";

const popupWithImage = new PopupWithImage("#popup-image");

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".template-card", {
        handleOpenCardClick: (name, link) => {
          popupWithImage.open(name, link);
        },
      });
      const cardElement = card.generateCard();
      sectionCards.addItem(cardElement);
    },
  },
  ".elements"
);
sectionCards.rendererItem();

const popupAddCard = new PopupWithForms("#popup-add-card", (item) => {
  const card = new Card(item.name, item.link, ".template-card_type_default", {
    handleOpenCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
  });
  const cardElement = card.generateCard();
  elementsArea.prepend(cardElement);
  popupAddCard.close();
});

const userOject = {
  user: ".profile__info-name",
  job: ".profile__info-description",
};
const userInfo = new UserInfo(userOject);
const popupProfile = new PopupWithForms("#popup-profile", ({ user, job }) => {
  userInfo.setUserInfo(user, job);
  popupProfile.close();
});

const titleInput = document.querySelector("#input-title");
const urlInput = document.querySelector("#input-url");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__info-name");
const profileInfo = document.querySelector(".profile__info-description");

const popUp = document.querySelector(".popup");
const formContainer = document.querySelector(".popup__container");
const popUpOverlay = document.querySelector(".popup__overlay");

const formPopUp = popUp.querySelector(".popup__form");
const nameInput = popUp.querySelector(".popup__input-name");
const jobInput = popUp.querySelector(".popup__input-description");

const buttonAddCard = document.querySelector(".profile__add-button-image");

const popUpCard = document.querySelector("#popup-add-card");
const formPopUpCard = document.querySelector("#popup-add-card-form");

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
/*function handleAddCard(evt) {
  evt.preventDefault();
  const card = new Card(
    { name: titleInput.value, link: urlInput.value },
    ".template-card_type_default"
  );
  elementsArea.prepend(card.generateCard());
  titleInput.value = "";
  urlInput.value = "";
  popUpCard.classList.remove("popup_opened");
}*/

//iniciacion targetas
/*initialCards.forEach((item) => {
  const card = new Card(item, ".template-card_type_default");
  const cardElement = card.generateCard();
  document.querySelector(".elements").append(cardElement);
});*/

//interatividad formulario perfil
/*function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popUp.classList.remove("popup_opened");
}*/
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
/*function closePopUp() {
  popUp.classList.remove("popup_opened");
}*/

//abrir y cerrar formulario card
function openPopUpCard() {
  popUpCard.classList.add("popup_opened");
}
/*function closePopUpCard() {
  popUpCard.classList.remove("popup_opened");
}*/
/*function closePopUpImage() {
  popUpImage.classList.remove("popup_opened");
}*/

//eventos de abrir y cerrar, formulario perfil
buttonEditProfile.addEventListener("click", openPopUp);
/*buttonClosePopUp.addEventListener("click", closePopUp);*/
/*formPopUp.addEventListener("submit", handleProfileFormSubmit);*/
//eventos de abrir y cerrar, formulario de card
buttonAddCard.addEventListener("click", openPopUpCard);
/*buttonClosePopUpCard.addEventListener("click", closePopUpCard);*/
/*formPopUpCard.addEventListener("submit", handleAddCard);*/
//evento cerrar popup image
/*buttonClosePopUpImage.addEventListener("click", closePopUpImage);*/
