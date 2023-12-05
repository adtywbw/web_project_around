const content = document.querySelector(".content");
const editButton = content.querySelector(".profile__button_edit");
const addButton = content.querySelector(".profile__button_add");
let profileName = content.querySelector(".profile__name");
let profileOccupation = content.querySelector(".profile__occupation");
const popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close");
const form = popup.querySelector("#popupForm");
let profileNameInput = popup.querySelector(".popup__item_name");
let profileOccupationInput = popup.querySelector(".popup__item_occupation");
let add = document.querySelector(".add");
let addForm = add.querySelector("#addForm");
let addTitle = add.querySelector(".add__item_title");
let addUrl = add.querySelector(".add__item_url");
let addSubmit = add.querySelector(".add__button");
let addClose = add.querySelector(".add__close");
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
let gridItemTemplate = gallery.querySelector("#galleryItemTemplate");
// clone elemen template
initialCards.forEach(function (item) {
  let clone = document.importNode(gridItemTemplate.content, true);
  // set nama dan gambar item pada elemen clone
  clone.querySelector(".gallery__name").textContent = item.name;
  clone.querySelector(".gallery__picture").src = item.link;
  // set tombol like
  let likeButton = clone.querySelectorAll(".gallery__love");
  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("gallery__love_fill");
    });
  });
  //set tombol delete
  let deleteButton = clone.querySelector(".gallery__delete");
  let galleryItem = clone.querySelector(".gallery__item");
  deleteButton.addEventListener("click", function () {
    galleryItem.remove();
  });

  // set tombol foto
  let photoButton = clone.querySelector(".gallery__picture");
  photoButton.addEventListener("click", function () {
    popupPhoto(item.name, item.link);
  });

  // PHOTO FUNCTION
  let photoContainer = document.querySelector(".photo");
  let photoPicture = photoContainer.querySelector(".photo__picture");
  let photoName = photoContainer.querySelector(".photo__name");
  // set photo dan nama
  function popupPhoto(pictureName, pictureLink) {
    photoPicture.src = pictureLink;
    photoName.textContent = pictureName;
    photoContainer.classList.add("photo__opened");
  }
  // set tombol close foto
  let closePhoto = photoContainer.querySelector(".photo__close");
  closePhoto.addEventListener("click", function () {
    photoContainer.classList.remove("photo__opened");
  });

  // masukan clone ke elemen gallery
  gallery.appendChild(clone);
});

// EDIT PROFILE BUTTON FUNCTION
editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  // mengambil nama
  let ambilNama = profileName.textContent;
  let ambilOccupation = profileOccupation.textContent;
  profileNameInput.value = ambilNama;
  profileOccupationInput.value = ambilOccupation;
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  //menyimpan nama
  let saveNama = profileNameInput.value;
  let saveOccupation = profileOccupationInput.value;
  profileName.textContent = saveNama;
  profileOccupation.textContent = saveOccupation;
  popup.classList.remove("popup_opened");
});

// CLOSE BUTTON FUNCTION FOR EDIT BUTTON
closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

// ADD BUTTON VALIDATIO FUNCTION
addButton.addEventListener("click", function () {
  add.classList.add("add_opened");

  // menambah fungsi validasi
  addTitle.addEventListener("input", validateForm);
  addUrl.addEventListener("input", validateForm);

  function validateForm() {
    // trim spasi yang ada di input title dan url
    let titleValue = addTitle.value.trim();
    let urlValue = addUrl.value.trim();

    // validasi judul
    let titleError = add.querySelector(".add__error_title");
    titleError.textContent = "";
    if (titleValue === "") {
      titleError.textContent = "Silahkan isi kolom ini.";
      addTitle.classList.add("add__item_red-border");
    } else {
      titleError.textContent = "";
      addTitle.classList.remove("add__item_red-border");
    }

    // validasi url
    let urlError = add.querySelector(".add__error_url");
    urlError.textContent = "";
    let urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(urlValue)) {
      urlError.textContent = "Silahkan masukan alamat web.";
      addUrl.classList.add("add__item_red-border");
    } else {
      urlError.textContent = "";
      addUrl.classList.remove("add__item_red-border");
    }

    // aktifkan/tidak tombol simpan jika validasi benar/salah
    addSubmit.disabled = titleValue === "" || !urlPattern.test(urlValue);

    // ubah class tombol
    if (titleValue === "" || !urlPattern.test(urlValue)) {
      addSubmit.classList.add("add__button_disabled");
    } else {
      addSubmit.classList.remove("add__button_disabled");
      addSubmit.style.backgroundColor = "black";
      addSubmit.addEventListener("mouseover", function () {
        this.style.backgroundColor = "rgba(0,0,0,0.8";
      });
      addSubmit.addEventListener("mouseout", function () {
        this.style.backgroundColor = "rgba(0,0,0,1";
      });
    }
  }
});

// CLOSE BUTTON FUNCTION FOR ADD BUTTON
addClose.addEventListener("click", function () {
  addTitle.value = "";
  addUrl.value = "";
  add.classList.remove("add_opened");
});

// ADD ITEM FUNTION
addForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  let titleValue = addTitle.value.trim();
  let urlValue = addUrl.value.trim();
  let clone = document.importNode(gridItemTemplate.content, true);
  // set judul dan gambar ke elemen clone
  clone.querySelector(".gallery__name").textContent = titleValue;
  clone.querySelector(".gallery__picture").src = urlValue;
  // set tombol like
  let likeButton = clone.querySelectorAll(".gallery__love");
  likeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("gallery__love_fill");
    });
  });
  //set tombol delete
  let deleteButton = clone.querySelector(".gallery__delete");
  let galleryItem = clone.querySelector(".gallery__item");
  deleteButton.addEventListener("click", function () {
    galleryItem.remove();
  });

  // set tombol foto
  let photoButton = clone.querySelector(".gallery__picture");
  photoButton.addEventListener("click", function () {
    popupPhoto(titleValue, urlValue);
  });

  // PHOTO FUNCTION
  let photoContainer = document.querySelector(".photo");
  let photoPicture = photoContainer.querySelector(".photo__picture");
  let photoName = photoContainer.querySelector(".photo__name");
  // set photo dan nama
  function popupPhoto(pictureName, pictureLink) {
    photoPicture.src = pictureLink;
    photoName.textContent = pictureName;
    photoContainer.classList.add("photo__opened");
  }
  // set tombol close foto
  let closePhoto = photoContainer.querySelector(".photo__close");
  closePhoto.addEventListener("click", function () {
    photoContainer.classList.remove("photo__opened");
  });

  // masukan nilai input sebelum item pertama
  gallery.insertBefore(clone, gallery.firstChild);
  // Reset nilai input
  addTitle.value = "";
  addUrl.value = "";
  // close form input
  add.classList.remove("add_opened");
});
