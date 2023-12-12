// VALIDASI FOR PROFILE'S EDIT BUTTON
// mengimpor variabel yang dibutuhkan dari script.js
import {
  profileNameInput,
  profileOccupationInput,
  profileNameError,
  profileOccupationError,
  profileSubmit,
} from "./script.js";

// validasi profile
export function validateProfile() {
  // validasi nama dan occupation
  const nameValidity = profileNameInput.validity;
  const occupationValidity = profileOccupationInput.validity;
  // Menggunakan validationMessage untuk mendapatkan pesan kesalahan jika ada
  var nameErrorMessage = profileNameInput.validationMessage;
  var occupationErrorMessage = profileOccupationInput.validationMessage;
  // checkValidity name dan occupation, disable tombol simpan jika validasi invalid
  if (!nameValidity.valid || !occupationValidity.valid) {
    profileSubmit.disabled = true;
    profileSubmit.classList.add("popup__button_disabled");
    profileNameError.textContent = nameErrorMessage;
    profileOccupationError.textContent = occupationErrorMessage;
  } else {
    profileSubmit.disabled = false;
    profileSubmit.classList.remove("popup__button_disabled");
    profileNameError.textContent = "";
    profileOccupationError.textContent = "";
  }
}

// VALIDASI FOR ADD BUTTON
// mengimpor variabel yang dibutuhkan dari script.js
import {
  addTitle,
  addUrl,
  addErrorTitle,
  addErrorUrl,
  addSubmit,
} from "./script.js";
export function validateForm() {
  // validasi judul dan url
  const titleValidity = addTitle.validity;
  const urlValidity = addUrl.validity;
  // Menggunakan validationMessage untuk mendapatkan pesan kesalahan jika ada
  var titleErrorMessage = addTitle.validationMessage;
  var urlErrorMessage = addUrl.validationMessage;

  // checkValidity title
  if (!titleValidity.valid) {
    addTitle.classList.add("add__item_red-border");
    addErrorTitle.textContent = titleErrorMessage;
  } else {
    addTitle.classList.remove("add__item_red-border");
    addErrorTitle.textContent = "";
  }
  // checkValidity title
  if (!urlValidity.valid) {
    addUrl.classList.add("add__item_red-border");
    addErrorUrl.textContent = urlErrorMessage;
  } else {
    addUrl.classList.remove("add__item_red-border");
    addErrorUrl.textContent = "";
  }

  // disable tombol simpan jika validasi invalid
  if (!titleValidity.valid || !urlValidity.valid) {
    addSubmit.disabled = true;
    addSubmit.classList.add("add__button_disabled");
  } else {
    addSubmit.disabled = false;
    addSubmit.classList.remove("add__button_disabled");
  }
}
