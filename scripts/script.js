const content = document.querySelector(".content");

const editButton = content.querySelector(".profile__button_edit");
const addButton = content.querySelector(".profile__button_add");
const profileName = content.querySelector(".profile__name");
const profileOccupation = content.querySelector(".profile__occupation");

const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const closeButton = popup.querySelector(".popup__close");
const popupForm = popup.querySelector("#popupForm");
export const profileNameInput = popup.querySelector(".popup__item_name");
export const profileOccupationInput = popup.querySelector(
  ".popup__item_occupation"
);
export const profileNameError = popup.querySelector(".popup__error_name");
export const profileOccupationError = popup.querySelector(
  ".popup__error_occupation"
);
export const profileSubmit = popup.querySelector(".popup__button");

const add = document.querySelector(".add");
export const addTitle = add.querySelector(".add__item_title");
export const addUrl = add.querySelector(".add__item_url");
export const titleError = add.querySelector(".add__error_title");
export const urlError = add.querySelector(".add__error_url");
export const addSubmit = add.querySelector(".add__button");
const addContainer = add.querySelector(".add__container");
const addForm = add.querySelector("#addForm");
const addClose = add.querySelector(".add__close");

const photo = document.querySelector(".photo");
const photoContainer = photo.querySelector(".photo__container");
const photoPicture = photo.querySelector(".photo__picture");
const photoName = photo.querySelector(".photo__name");

const gallery = document.querySelector(".gallery");
const initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// GALLERY INTIAL CARD FUNCTION
const gridItemTemplate = gallery.querySelector("#galleryItemTemplate");

initialCards.forEach(function (item) {
  // clone elemen template
  const clone = document.importNode(gridItemTemplate.content, true);
  // copy tiap nama dan gambar dari objek initial card ke elemen clone
  clone.querySelector(".gallery__name").textContent = item.name;
  clone.querySelector(".gallery__picture").src = item.link;
  // memberi event click ke tombol like tiap item gallery
  const likeButton = clone.querySelectorAll(".gallery__love");
  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("gallery__love_fill");
    });
  });
  // memberi event click ke tombol delete pada item gallery
  const deleteButton = clone.querySelector(".gallery__delete");
  const galleryItem = clone.querySelector(".gallery__item");
  deleteButton.addEventListener("click", function () {
    galleryItem.remove();
  });
  // memberi event click ke picture pada item gallery agar dapat di zoom
  const photoButton = clone.querySelector(".gallery__picture");
  photoButton.addEventListener("click", function () {
    popupPhoto(item.name, item.link);
    // memberi focus pada foto agar foto bisa menerima event keydown
    photoPicture.focus();
    // menghilangkan efek focus (muncul outline)
    photoPicture.style.outline = "none";
    // memberi event keydown tombol esc untuk menutup foto yang telah di zoom
    photoPicture.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        photo.classList.remove("photo__opened");
      }
    });
  });

  // fungsi untuk zoom picture pada item gallery
  function popupPhoto(pictureName, pictureLink) {
    photoPicture.src = pictureLink;
    photoName.textContent = pictureName;
    photoPicture.setAttribute("tabindex", "0");
    photo.classList.add("photo__opened");
  }
  // memberi event click ke tombol close saat item gallery di zoom
  const closePhoto = photo.querySelector(".photo__close");
  closePhoto.addEventListener("click", function () {
    photo.classList.remove("photo__opened");
  });

  // memberi event click ke overlay saat item gallery di zoom
  photo.addEventListener("click", function (event) {
    if (!photoContainer.contains(event.target)) {
      photo.classList.remove("photo__opened");
    }
  });

  // masukan clone ke elemen gallery
  gallery.appendChild(clone);
});

// PROFILE'S EDIT BUTTON FUNCTION
// mengambil fungsi validasi profile dari validate.js
import { validateProfile } from "./validate.js";
// listener click tombol edit
editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  // mengambil nama dan occupation prfoile
  const ambilNama = profileName.textContent;
  const ambilOccupation = profileOccupation.textContent;
  profileNameInput.value = ambilNama;
  profileOccupationInput.value = ambilOccupation;

  // menambah fungsi validasi
  profileNameInput.addEventListener("input", validateProfile);
  profileOccupationInput.addEventListener("input", validateProfile);
});

// PROFILE'S SAVE BUTTON FUNCTION
popupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  // menyimpan nama profile dari form profile
  const saveNama = profileNameInput.value;
  const saveOccupation = profileOccupationInput.value;
  profileName.textContent = saveNama;
  profileOccupation.textContent = saveOccupation;
  popup.classList.remove("popup_opened");
});

// PROFILE'S CLOSE BUTTON FUNCTION
closeButton.addEventListener("click", function () {
  profileNameError.textContent = "";
  profileOccupationError.textContent = "";
  profileNameInput.classList.remove("popup__item_red-border");
  profileOccupationInput.classList.remove("popup__item_red-border");
  popup.classList.remove("popup_opened");
});

// PROFILE'S OVERLAY CLOSE FUNCTION
popup.addEventListener("mousedown", function (event) {
  if (!popupContainer.contains(event.target)) {
    profileNameError.textContent = "";
    profileOccupationError.textContent = "";
    profileNameInput.classList.remove("popup__item_red-border");
    profileOccupationInput.classList.remove("popup__item_red-border");
    popup.classList.remove("popup_opened");
  }
});

// PROFILE'S "ESC" CLOSE BUTTON FUNCTION
editButton.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    profileNameError.textContent = "";
    profileOccupationError.textContent = "";
    profileNameInput.classList.remove("popup__item_red-border");
    profileOccupationInput.classList.remove("popup__item_red-border");
    popup.classList.remove("popup_opened");
  }
});

// ADD'S BUTTON VALIDATION FUNCTION
// mengimport fungsi validasi dari validate.js
import { validateForm } from "./validate.js";
// memberi event click pada tombol add
addButton.addEventListener("click", function () {
  add.classList.add("add_opened");

  // menambah fungsi validasi saat input dimasukan
  addTitle.addEventListener("input", validateForm);
  addUrl.addEventListener("input", validateForm);
});

// ADD'S BUTTON CLOSE BUTTON FUNCTION
addClose.addEventListener("click", function () {
  addForm.reset();
  titleError.textContent = "";
  urlError.textContent = "";
  addUrl.classList.remove("add__item_red-border");
  addTitle.classList.remove("add__item_red-border");
  add.classList.remove("add_opened");
});

// ADD'S OVERLAY CLOSE FUNCTION
add.addEventListener("mousedown", function (event) {
  if (!addContainer.contains(event.target)) {
    addForm.reset();
    titleError.textContent = "";
    urlError.textContent = "";
    addUrl.classList.remove("add__item_red-border");
    addTitle.classList.remove("add__item_red-border");
    add.classList.remove("add_opened");
  }
});

// ADD'S "ESC" CLOSE BUTTON FUNCTION
addButton.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    addForm.reset();
    titleError.textContent = "";
    urlError.textContent = "";
    addUrl.classList.remove("add__item_red-border");
    addTitle.classList.remove("add__item_red-border");
    add.classList.remove("add_opened");
  }
});

// ADD'S SAVE BUTTON FUNCTION
addForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  // trim spasi yang ada di input title dan url
  const titleValue = addTitle.value.trim();
  const urlValue = addUrl.value.trim();
  const clone = document.importNode(gridItemTemplate.content, true);
  // menyimpan judul dan gambar ke elemen clone
  clone.querySelector(".gallery__name").textContent = titleValue;
  clone.querySelector(".gallery__picture").src = urlValue;
  // memberi event click ke tombol like ke tiap item gallery yang ditambahkan
  const likeButton = clone.querySelectorAll(".gallery__love");
  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("gallery__love_fill");
    });
  });
  // memberi event click ke tombol delete ke tiap item gallery yang ditambahkan
  const deleteButton = clone.querySelector(".gallery__delete");
  const galleryItem = clone.querySelector(".gallery__item");
  deleteButton.addEventListener("click", function () {
    galleryItem.remove();
  });

  // memberi event click ke picture pada item gallery yang ditambahkan agar dapat di zoom
  const photoButton = clone.querySelector(".gallery__picture");
  photoButton.addEventListener("click", function () {
    popupPhoto(titleValue, urlValue);
    // memberi focus pada foto agar foto bisa menerima event keydown
    photoPicture.focus();
    // menghilangkan efek focus (muncul outline)
    photoPicture.style.outline = "none";
    photoPicture.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        photo.classList.remove("photo__opened");
      }
    });
  });

  // fungsi untuk zoom picture pada item gallery yang ditambahkan
  function popupPhoto(pictureName, pictureLink) {
    photoPicture.src = pictureLink;
    photoName.textContent = pictureName;
    photoPicture.setAttribute("tabindex", "0");
    photo.classList.add("photo__opened");
  }
  // memberi event click ke tombol close saat item gallery yang ditambahkan di zoom
  const closePhoto = photo.querySelector(".photo__close");
  closePhoto.addEventListener("click", function () {
    photo.classList.remove("photo__opened");
  });

  // memberi event click ke overlay saat item gallery yang ditambahkan di zoom
  photo.addEventListener("click", function (event) {
    if (!photoContainer.contains(event.target)) {
      photo.classList.remove("photo__opened");
    }
  });

  // masukan item gallery yang ditambahkan ke posisi sebelum item gallery pertama
  gallery.insertBefore(clone, gallery.firstChild);
  // Reset nilai input
  addForm.reset();
  // close form input
  add.classList.remove("add_opened");
});
