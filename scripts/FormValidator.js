export class FormValidator {
  constructor(settings, formData) {
    this.settings = settings;
    this.formData = formData;
  }

  validateProfileForm() {
    const nameValidity = this.formData.profileNameInput.validity;
    const occupationValidity = this.formData.profileOccupationInput.validity;
    const nameErrorMessage = this.formData.profileNameInput.validationMessage;
    const occupationErrorMessage =
      this.formData.profileOccupationInput.validationMessage;
    const isNameValid = nameValidity.valid;
    const isOccupationValid = occupationValidity.valid;

    if (!isNameValid) {
      this.formData.profileNameError.textContent = nameErrorMessage;
      this.formData.profileNameInput.classList.add("popup__item_red-border");
    } else {
      this.formData.profileNameError.textContent = "";
      this.formData.profileNameInput.classList.remove("popup__item_red-border");
    }

    if (!isOccupationValid) {
      this.formData.profileOccupationError.textContent = occupationErrorMessage;
      this.formData.profileOccupationInput.classList.add(
        "popup__item_red-border"
      );
    } else {
      this.formData.profileOccupationError.textContent = "";
      this.formData.profileOccupationInput.classList.remove(
        "popup__item_red-border"
      );
    }

    if (!isNameValid || !isOccupationValid) {
      this.formData.profileSubmit.disabled = true;
      this.formData.profileSubmit.classList.add("popup__button_disabled");
    } else {
      this.formData.profileSubmit.disabled = false;
      this.formData.profileSubmit.classList.remove("popup__button_disabled");
    }
  }

  validateAddForm() {
    const titleValidity = this.formData.addTitle.validity;
    const urlValidity = this.formData.addUrl.validity;
    const titleErrorMessage = this.formData.addTitle.validationMessage;
    const urlErrorMessage = this.formData.addUrl.validationMessage;
    const isTitleValid = titleValidity.valid;
    const isUrlValid = urlValidity.valid;

    if (!isTitleValid) {
      this.formData.addTitle.classList.add("add__item_red-border");
      this.formData.addErrorTitle.textContent = titleErrorMessage;
    } else {
      this.formData.addTitle.classList.remove("add__item_red-border");
      this.formData.addErrorTitle.textContent = "";
    }

    if (!isUrlValid) {
      this.formData.addUrl.classList.add("add__item_red-border");
      this.formData.addErrorUrl.textContent = urlErrorMessage;
    } else {
      this.formData.addUrl.classList.remove("add__item_red-border");
      this.formData.addErrorUrl.textContent = "";
    }

    if (!isTitleValid || !isUrlValid) {
      this.formData.addSubmit.disabled = true;
      this.formData.addSubmit.classList.add("add__button_disabled");
    } else {
      this.formData.addSubmit.disabled = false;
      this.formData.addSubmit.classList.remove("add__button_disabled");
    }
  }

  enableValidation() {
    this.formData.profileNameInput.addEventListener("input", () => {
      this.validateProfileForm();
    });

    this.formData.profileOccupationInput.addEventListener("input", () => {
      this.validateProfileForm();
    });

    this.formData.addTitle.addEventListener("input", () => {
      this.validateAddForm();
    });

    this.formData.addUrl.addEventListener("input", () => {
      this.validateAddForm();
    });
  }
}

// objek pengaturan yang menyimpan selektor serta kelas formulir (berisi referensi ke elemen-elemen formulir)
const settings = {
  profile: {
    nameInput: "#profileNameInput",
    occupationInput: "#profileOccupationInput",
    nameError: "#profileNameError",
    occupationError: "#profileOccupationError",
    submitButton: "#profileSubmit",
  },
  add: {
    titleInput: "#addTitle",
    urlInput: "#addUrl",
    titleError: "#addErrorTitle",
    urlError: "#addErrorUrl",
    submitButton: "#addSubmit",
  },
};
// parameter penyimpan variabel yang diperlukan
const formData = {
  profileNameInput: document.querySelector(".popup__item_name"),
  profileOccupationInput: document.querySelector(".popup__item_occupation"),
  profileNameError: document.querySelector(".popup__error_name"),
  profileOccupationError: document.querySelector(".popup__error_occupation"),
  profileSubmit: document.querySelector(".popup__button"),
  addTitle: document.querySelector(".add__item_title"),
  addUrl: document.querySelector(".add__item_url"),
  addErrorTitle: document.querySelector(".add__error_title"),
  addErrorUrl: document.querySelector(".add__error_url"),
  addSubmit: document.querySelector(".add__button"),
};

const formValidator = new FormValidator(settings, formData);
formValidator.enableValidation();
