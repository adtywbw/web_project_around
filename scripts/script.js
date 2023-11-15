let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__button_edit");
let profileName = content.querySelector(".profile__name");
let profileOccupation = content.querySelector(".profile__occupation");
let popup = document.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close");
let form = popup.querySelector("#popupForm");
let profileNameInput = popup.querySelector(".popup__item_name");
let profileOccupationInput = popup.querySelector(".popup__item_occupation");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  let ambilNama = profileName.textContent;
  let ambilOccupation = profileOccupation.textContent;
  profileNameInput.value = ambilNama;
  profileOccupationInput.value = ambilOccupation;
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let saveNama = profileNameInput.value;
  let saveOccupation = profileOccupationInput.value;
  profileName.textContent = saveNama;
  profileOccupation.textContent = saveOccupation;
  popup.classList.remove("popup_opened");
});
