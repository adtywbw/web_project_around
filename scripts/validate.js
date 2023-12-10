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
  // ambil nilai nama dan occupation
  const nameValue = profileNameInput.value;
  const occupationValue = profileOccupationInput.value;
  // validasi nama
  if (nameValue.length === 0) {
    profileNameError.textContent = "Silahkan isi kolom ini.";
  } else if (nameValue.length < 2 || nameValue.length > 40) {
    profileNameError.textContent = `Harap perpanjang ini menjadi 2 karakter atau lebih. Anda saat ini menggunakan ${nameValue.length} karakter`;
  } else {
    profileNameError.textContent = "";
  }
  // validasi occupation
  if (occupationValue.length === 0) {
    profileOccupationError.textContent = "Silahkan isi kolom ini.";
  } else if (occupationValue.length < 2 || occupationValue.length > 200) {
    profileOccupationError.textContent = `Harap perpanjang ini menjadi 2 karakter atau lebih. Anda saat ini menggunakan ${occupationValue.length} karakter`;
  } else {
    profileOccupationError.textContent = "";
  }
  // disable tombol simpan jika validasi salah
  if (
    nameValue.length < 2 ||
    nameValue > 40 ||
    occupationValue.length < 2 ||
    occupationValue > 200
  ) {
    profileSubmit.disabled = true;
    profileSubmit.classList.add("popup__button_disabled");
  } else {
    profileSubmit.disabled = false;
    profileSubmit.classList.remove("popup__button_disabled");
  }
}

// VALIDASI FOR ADD BUTTON
// mengimpor variabel yang dibutuhkan dari script.js
import { addTitle, addUrl, titleError, urlError, addSubmit } from "./script.js";
export function validateForm() {
  // trim spasi yang ada di input title dan url
  const titleValue = addTitle.value.trim();
  const urlValue = addUrl.value.trim();

  // validasi judul
  titleError.textContent = "";
  if (titleValue === "") {
    titleError.textContent = "Silahkan isi kolom ini.";
    addTitle.classList.add("add__item_red-border");
  } else if (titleValue.length < 2 || titleValue.length > 30) {
    titleError.textContent = `Harap perpanjang ini menjadi 2 karakter atau lebih. Anda saat ini menggunakan ${titleValue.length} karakter`;
    addTitle.classList.add("add__item_red-border");
  } else {
    titleError.textContent = "";
    addTitle.classList.remove("add__item_red-border");
  }

  // validasi url
  urlError.textContent = "";
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(urlValue)) {
    urlError.textContent = "Silahkan masukan alamat web.";
    addUrl.classList.add("add__item_red-border");
  } else {
    urlError.textContent = "";
    addUrl.classList.remove("add__item_red-border");
  }

  // disable tombol simpan jika validasi salah
  addSubmit.disabled = titleValue === "" || !urlPattern.test(urlValue);
  if ((addSubmit.disabled = titleValue === "" || !urlPattern.test(urlValue))) {
    addSubmit.disabled = true;
    addSubmit.classList.add("add__button_disabled");
  } else {
    addSubmit.disabled = false;
    addSubmit.classList.remove("add__button_disabled");
  }
}
