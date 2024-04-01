const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__info-name");
const profileInfo = document.querySelector(".profile__info-description");

const popUp = document.querySelector(".popup");
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

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function handleAddCard(evt) {
  evt.preventDefault();
  const cardNode = createCard(titleInput.value, urlInput.value);
  elementsArea.prepend(cardNode);
  popUpCard.classList.remove("popup_opened");
}

function createCard(name, link) {
  const template = document.querySelector(".template-card");
  const templateNode = template.content.querySelector(".element");
  const cardNode = templateNode.cloneNode(true);

  cardNode.querySelector(".element__image").src = link;
  cardNode.querySelector(".element__image").alt = "Image de :" + name;

  cardNode.querySelector(".element__name").textContent = name;

  cardNode.querySelector(".element__trash").addEventListener("click", () => {
    cardNode.remove();
  });

  const buttonLike = cardNode.querySelector(".element__like");

  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("element__like_active");
  });

  cardNode.querySelector(".element__image").addEventListener("click", () => {
    popUpImage.classList.add("popup_opened");
    popUpImage.querySelector(".popup-image").src = link;
    popUpImage.querySelector(".popup-image").alt = "Image de :" + name;
    popUpImage.querySelector(".popup__title-image").textContent = name;
  });

  return cardNode;
}

//initianitalcards => elements
initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);
  elementsArea.append(cardNode);
});

//abrir y cerrar formulario perfil
function openPopUp() {
  popUp.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}
function closePopUp() {
  popUp.classList.remove("popup_opened");
}
//interatividad formulario perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
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
//eventos de cerrar
buttonClosePopUpImage.addEventListener("click", closePopUpImage);
