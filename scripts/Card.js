// GALLERY INTIAL CLASS
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

export class Card {
  constructor(data, container, template) {
    this.data = data;
    this.container = document.querySelector(".gallery");
    this.template = document.querySelector("#galleryItemTemplate");
    this.overlay = document.querySelector(".photo");
    this.photoContainer = this.overlay.querySelector(".photo__container");
    this.photoPicture = this.overlay.querySelector(".photo__picture");
    this.photoName = this.overlay.querySelector(".photo__name");
  }

  createGalleryElement() {
    // Iterasi melalui data dan membuat elemen untuk setiap item
    this.data.forEach((data, index) => {
      // kloning template
      const clone = document.importNode(this.template.content, true);
      // copy tiap nama dan gambar dari objek initial card ke elemen clone
      clone.querySelector(".gallery__name").textContent = data.name;
      clone.querySelector(".gallery__picture").src = data.link;
      // memberi event click ke tombol delete pada item gallery
      const deleteButton = clone.querySelector(".gallery__delete");
      deleteButton.addEventListener("click", () => this.deleteItem(index));
      // memberi event click ke tombol like pada item gallery
      const likeButton = clone.querySelector(".gallery__like");
      likeButton.addEventListener("click", () =>
        this.toggleLike(likeButton, index)
      );
      // Set status "liked" berdasarkan data
      if (data.liked === true) {
        likeButton.classList.toggle("gallery__like_fill");
      }
      // memberi event click ke picture pada item gallery agar dapat di zoom
      const photoButton = clone.querySelector(".gallery__picture");
      photoButton.addEventListener("click", () =>
        this.openPhoto(data.name, data.link)
      );
      // memberi event click ke tombol close saat item gallery di zoom
      const photoCloseButton = this.overlay.querySelector(
        ".photo__close-button"
      );
      photoCloseButton.addEventListener("click", () => this.closePhoto());
      // memberi event click ke overlay saat item gallery di zoom
      this.overlay.addEventListener("click", () =>
        this.closePhotoOverlay(event)
      );
      // Menambahkan item yang diisi ke dalam container gallery
      this.container.appendChild(clone);
    });
  }

  deleteItem(index) {
    // Menggunakan delete untuk menghapus item dari objek
    delete this.data[index];
    // Mengosongkan container
    this.container.innerHTML = "";
    // mengisi ulang galeri
    this.createGalleryElement();
  }

  toggleLike(likeButton, index) {
    likeButton.classList.toggle("gallery__like_fill");

    // Update status "liked" pada data
    this.data[index].liked = !this.data[index].liked;
  }

  openPhoto(imgName, imgLink) {
    // Menetapkan URL gambar pada overlay sesuai dengan gambar yang diklik
    this.photoName.textContent = imgName;
    this.photoPicture.src = imgLink;
    // Menampilkan overlay
    this.overlay.classList.add("photo__opened");
    // memberi event keydown tombol esc untuk menutup foto yang telah di zoom
    document.addEventListener("keydown", () => this.handleEscKey(event));
  }

  closePhoto() {
    this.overlay.classList.remove("photo__opened");
    // Menghapus event listener untuk tombol "Escape" saat overlay ditutup
    document.removeEventListener("keydown", this.handleEscKey);
  }

  closePhotoOverlay(event) {
    if (!this.photoContainer.contains(event.target)) {
      this.closePhoto();
    }
  }

  handleEscKey(event) {
    if (event.key === "Escape") {
      this.closePhoto();
    }
  }
}

// Membuat instance dari class Gallery
export const card = new Card(initialCards, "container", "template");
card.createGalleryElement();
