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
