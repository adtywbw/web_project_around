// PROFILE EVENT HANDLER
// import variabel yang diperlukan

import {
  popup,
  profileName,
  profileOccupation,
  profileNameInput,
  profileOccupationInput,
  profileNameError,
  profileOccupationError,
  popupContainer,
  popupForm,
} from "./index.js";

// import validation function
import { FormValidator } from "./FormValidator.js";

// openpopup function
export function openPopup() {
  popup.classList.add("popup_opened");
  // mengambil nama dan occupation prfoile
  const ambilNama = profileName.textContent;
  const ambilOccupation = profileOccupation.textContent;
  profileNameInput.value = ambilNama;
  profileOccupationInput.value = ambilOccupation;
}
// closepopup function
export function closePopup() {
  profileNameError.textContent = "";
  profileOccupationError.textContent = "";
  popup.classList.remove("popup_opened");
}
// closeOverlayPopup
export function closeOverlayPopup(event) {
  if (!popupContainer.contains(event.target)) {
    profileNameError.textContent = "";
    profileOccupationError.textContent = "";
    popup.classList.remove("popup_opened");
  }
}
// closeEscPopup
export function closeEscPopup(event) {
  if (event.key === "Escape") {
    profileNameError.textContent = "";
    profileOccupationError.textContent = "";
    popup.classList.remove("popup_opened");
  }
}
// savePopupForm function
export function savePopupForm(event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  // menyimpan nama profile dari form profile
  const saveNama = profileNameInput.value;
  const saveOccupation = profileOccupationInput.value;
  profileName.textContent = saveNama;
  profileOccupation.textContent = saveOccupation;
  popup.classList.remove("popup_opened");
}

// ADD EVENT HANDLER
// import variabel yang diperlukan
import {
  add,
  addTitle,
  addUrl,
  addErrorTitle,
  addErrorUrl,
  addForm,
  addSubmit,
  addContainer,
} from "./index.js";
// openadd function
export function openAdd() {
  add.classList.add("add_opened");
}
// closeadd function
export function closeAdd() {
  addForm.reset();
  addTitle.classList.remove("add__item_red-border");
  addUrl.classList.remove("add__item_red-border");
  addErrorTitle.textContent = "";
  addErrorUrl.textContent = "";
  add.classList.remove("add_opened");
}
// closeoverlayadd function
export function closeOverlayAdd(event) {
  if (!addContainer.contains(event.target)) {
    addForm.reset();
    addTitle.classList.remove("add__item_red-border");
    addUrl.classList.remove("add__item_red-border");
    addErrorTitle.textContent = "";
    addErrorUrl.textContent = "";
    add.classList.remove("add_opened");
  }
}
// closeescadd function
export function closeEscAdd(event) {
  if (event.key === "Escape") {
    addForm.reset();
    addTitle.classList.remove("add__item_red-border");
    addUrl.classList.remove("add__item_red-border");
    addErrorTitle.textContent = "";
    addErrorUrl.textContent = "";
    add.classList.remove("add_opened");
  }
}

// saveaddform function
// import variabel yang dibutuhkan
import { initialCards, card } from "./Card.js";
import { gallery } from "./index.js";
export function saveAddForm(event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  // Menambah item baru ke objek data
  initialCards.unshift({ name: addTitle.value, link: addUrl.value });
  // Reset nilai input
  addForm.reset();
  // Mengosongkan container
  gallery.innerHTML = "";
  // mengisi ulang gallery
  card.createGalleryElement();
  // close form input
  add.classList.remove("add_opened");
}
