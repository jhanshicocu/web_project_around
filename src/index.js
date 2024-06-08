import "./pages/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import {
  initialCards,
  elementsArea,
  buttonEditProfile,
  buttonAddCard,
  formAddCards,
  formEditProfile,
  formPopUp,
  popUpCard,
  popUp,
  nameInput,
  profileName,
  jobInput,
  profileInfo,
} from "./components/utils.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForms from "./components/PopupWithForms.js";
import UserInfo from "./components/UserInfo.js";

const popupWithImage = new PopupWithImage("#popup-image");

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        ".template-card_type_default",
        {
          handleOpenCardClick: (name, link) => {
            popupWithImage.open(name, link);
          },
        }
      );

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

const validateFormProfile = new FormValidator(formPopUp, formEditProfile);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(popUpCard, formAddCards);
validateFormCard.enableValidation();

buttonEditProfile.addEventListener("click", () => {
  popUp.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
});

buttonAddCard.addEventListener("click", () => {
  popUpCard.classList.add("popup_opened");
});
