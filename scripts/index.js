const editProfile = document.querySelector(".profile__edit-button");
const popUp = document.querySelector(".popup");
const closeButtonPopUp = popUp.querySelector(".popup__close-icon_image ");
const formElement = popUp.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info_name");
const profileInfo = document.querySelector(".profile__info_description");

function openPopUp() {
  popUp.classList.add("popup_opened");
}

function closePopUp() {
  popUp.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = popUp.querySelector(".popup__input_name");
  let jobInput = popUp.querySelector(".popup__input_description");
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popUp.classList.remove("popup_opened");
}

editProfile.addEventListener("click", openPopUp);
closeButtonPopUp.addEventListener("click", closePopUp);
formElement.addEventListener("submit", handleProfileFormSubmit);
