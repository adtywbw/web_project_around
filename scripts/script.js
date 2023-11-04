document.addEventListener("DOMContentLoaded", function () {
  let content = document.querySelector(".content");
  let editButton = content.querySelector(".profile__button_edit");
  let profileName = content.querySelector(".profile__name");
  let profileOccupation = content.querySelector(".profile__occupation");
  let popupContainer = document.querySelector(".popup ");
  let closeButton = popupContainer.querySelector(".popup__close");
  let profileNameInput = popupContainer.querySelector(".popup__item_name");
  let profileOccupationInput = popupContainer.querySelector(
    ".popup__item_occupation"
  );
  let saveButton = popupContainer.querySelector(".popup__button");

  editButton.addEventListener("click", function () {
    let ambilNama = profileName.textContent;
    let ambilOccupation = profileOccupation.textContent;
    profileNameInput.value = ambilNama;
    profileOccupationInput.value = ambilOccupation;
    popupContainer.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  saveButton.addEventListener("click", function () {
    let saveNama = profileNameInput.value;
    let saveOccupation = profileOccupationInput.value;
    profileName.innerHTML = saveNama;
    profileOccupation.innerHTML = saveOccupation;
    popupContainer.style.display = "none";
  });
});
