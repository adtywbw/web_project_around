const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__button_edit");
const addButton = content.querySelector(".profile__button_add");
export const profileName = content.querySelector(".profile__name");
export const profileOccupation = content.querySelector(".profile__occupation");

export const popup = document.querySelector(".popup");
export const popupContainer = popup.querySelector(".popup__container");
const closeButton = popup.querySelector(".popup__close");
export const popupForm = popup.querySelector("#popupForm");
export const profileNameInput = popup.querySelector(".popup__item_name");
export const profileOccupationInput = popup.querySelector(
  ".popup__item_occupation"
);
export const profileNameError = popup.querySelector(".popup__error_name");
export const profileOccupationError = popup.querySelector(
  ".popup__error_occupation"
);
export const profileSubmit = popup.querySelector(".popup__button");

export const add = document.querySelector(".add");
export const addTitle = add.querySelector(".add__item_title");
export const addUrl = add.querySelector(".add__item_url");
export const addErrorTitle = add.querySelector(".add__error_title");
export const addErrorUrl = add.querySelector(".add__error_url");
export const addSubmit = add.querySelector(".add__button");
export const addContainer = add.querySelector(".add__container");
export const addForm = add.querySelector("#addForm");
const addClose = add.querySelector(".add__close");

// GALLERY INITIAL SECTION
import { Card } from "./Card.js";
// jalankan function initial card

// PROFILE SECTION
//import profile function
import {
  openPopup,
  closePopup,
  closeOverlayPopup,
  closeEscPopup,
  savePopupForm,
} from "./utils.js";
// profile Openpopup
editButton.addEventListener("click", openPopup);
// profile closepopup
closeButton.addEventListener("click", closePopup);
// profile closeoverlaypopup
popup.addEventListener("mousedown", closeOverlayPopup);
// profile closeescpopup
editButton.addEventListener("keydown", closeEscPopup);
// profile savepopupform
popupForm.addEventListener("submit", savePopupForm);

// ADD SECTION
// import add function
import {
  openAdd,
  closeAdd,
  closeOverlayAdd,
  closeEscAdd,
  saveAddForm,
} from "./utils.js";
// add openadd
addButton.addEventListener("click", openAdd);
// add closeadd
addClose.addEventListener("click", closeAdd);
// addcloseoverlay
add.addEventListener("mousedown", closeOverlayAdd);
// addcloseescadd
addButton.addEventListener("keydown", closeEscAdd);
// saveaddform
addForm.addEventListener("submit", saveAddForm);
