export const initialCards = [
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
export const elementsArea = document.querySelector(".elements");
const titleInput = document.querySelector("#input-title");
const urlInput = document.querySelector("#input-url");

export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const profileName = document.querySelector(".profile__info-name");
export const profileInfo = document.querySelector(".profile__info-description");

export const popUp = document.querySelector(".popup");
const formContainer = document.querySelector(".popup__container");
const popUpOverlay = document.querySelector(".popup__overlay");

export const formPopUp = popUp.querySelector(".popup__form");
export const nameInput = popUp.querySelector(".popup__input-name");
export const jobInput = popUp.querySelector(".popup__input-description");

export const buttonAddCard = document.querySelector(
  ".profile__add-button-image"
);

export const popUpCard = document.querySelector("#popup-add-card");
const formPopUpCard = document.querySelector("#popup-add-card-form");

export const formEditProfile = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const formAddCards = {
  formSelector: "#popup-add-card-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
