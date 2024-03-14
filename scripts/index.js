const editProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__info-name");
const profileInfo = document.querySelector(".profile__info-description");

const popUp = document.querySelector(".popup");
const closeButtonPopUp = popUp.querySelector(".popup__close-icon-image");
const formPopUp = popUp.querySelector(".popup__form");
const nameInput = popUp.querySelector(".popup__input-name");
const jobInput = popUp.querySelector(".popup__input-description");

function openPopUp() {
  popUp.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}

function closePopUp() {
  popUp.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popUp.classList.remove("popup_opened");
}

editProfile.addEventListener("click", openPopUp);
closeButtonPopUp.addEventListener("click", closePopUp);
formPopUp.addEventListener("submit", handleProfileFormSubmit);
