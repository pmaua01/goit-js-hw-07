import { galleryItems } from "./gallery-items.js";
// Change code below this line

function addMarkupGallery(gallery) {
  return gallery
    .map(
      ({ original, description, preview }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

const addGallary = addMarkupGallery(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", addGallary);

galleryEl.addEventListener("click", onGalleryElClick);
const instance = basicLightbox.create(
  `
        <img src="">
    `,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onModalEsc);
    },
    onclose: (instance) => {
      window.removeEventListener("keydown", onModalEsc);
    },
  }
);

function onGalleryElClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  evt.preventDefault();
  const UrlBigImg = evt.target.dataset.source;
  instance.element().querySelector("img").src = UrlBigImg;
  instance.show();
}

function onModalEsc(evt) {
  if (evt.code === "Escape") {
    console.log("press esc");
    instance.close();
  }
}
