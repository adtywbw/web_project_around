export class Card {
  constructor(data, template) {
    this.data = data;
    this.template = document.querySelector("#galleryItemTemplate");
    this.container = document.querySelector(".gallery");
    this.overlay = document.querySelector(".photo");
    this.photoContainer = this.overlay.querySelector(".photo__container");
    this.photoPicture = this.overlay.querySelector(".photo__picture");
    this.photoName = this.overlay.querySelector(".photo__name");
  }

  _createGalleryElement(data, index) {
    // kloning template
    const clone = document.importNode(this.template.content, true);

    // copy tiap nama dan gambar dari objek initial card ke elemen clone
    clone.querySelector(".gallery__name").textContent = data.name;
    clone.querySelector(".gallery__picture").src = data.link;

    // Tambahkan indeks sebagai atribut data-index
    const galleryItem = clone.querySelector(".gallery__item");
    galleryItem.setAttribute("data-index", index);

    // memberi event click ke tombol like pada item gallery
    const likeButton = clone.querySelector(".gallery__like");
    likeButton.addEventListener("click", () => this._toggleLike(index));

    // Set status "liked" berdasarkan data
    if (data.liked) {
      likeButton.classList.toggle("gallery__like_fill");
    }

    // Tmemberi event click ke tombol delete pada item gallery
    const deleteButton = clone.querySelector(".gallery__delete");
    deleteButton.addEventListener("click", () => this._deleteItem(index));

    // memberi event click ke picture pada item gallery agar dapat di zoom
    const photoButton = clone.querySelector(".gallery__picture");
    photoButton.addEventListener("click", () =>
      this._openPhoto(data.name, data.link)
    );
    // memberi event click ke tombol close saat item gallery di zoom
    const photoCloseButton = this.overlay.querySelector(".photo__close-button");
    photoCloseButton.addEventListener("click", () => this._closePhoto());
    // memberi event click ke overlay saat item gallery di zoom
    this.overlay.addEventListener("click", () =>
      this._closePhotoOverlay(event)
    );

    return clone;
  }

  createObject() {
    // Mengosongkan container
    this.container.innerHTML = "";
    // Render setiap item secara individual
    initialCards.forEach((data, index) => {
      const card = this._createGalleryElement(data, index);
      this.container.appendChild(card);
    });
  }

  _deleteItem(index) {
    // Hapus item dari array
    this.data.splice(index, 1);
    // Mengosongkan container
    this.container.innerHTML = "";
    // mengisi ulang galeri
    this.createObject();
  }

  _toggleLike(index) {
    // Update status "liked" pada data
    this.data[index].liked = !this.data[index].liked;
    // mengisi ulang galeri
    this.createObject();
  }

  _openPhoto(imgName, imgLink) {
    // Menetapkan URL gambar pada overlay sesuai dengan gambar yang diklik
    this.photoName.textContent = imgName;
    this.photoPicture.src = imgLink;
    // Menampilkan overlay
    this.overlay.classList.add("photo__opened");
    // memberi event keydown tombol esc untuk menutup foto yang telah di zoom
    document.addEventListener("keydown", () => this._handleEscKey(event));
  }

  _closePhoto() {
    this.overlay.classList.remove("photo__opened");
    // Menghapus event listener untuk tombol "Escape" saat overlay ditutup
    document.removeEventListener("keydown", this._handleEscKey);
  }

  _closePhotoOverlay(event) {
    if (!this.photoContainer.contains(event.target)) {
      this._closePhoto();
    }
  }

  _handleEscKey(event) {
    if (event.key === "Escape") {
      this._closePhoto();
    }
  }
}

// Objek item
export const initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    liked: false,
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    liked: false,
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    liked: false,
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    liked: false,
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    liked: false,
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    liked: false,
  },
];
