import { galleryItems } from "./gallery-items.js";
// Change code below this line
function addMarkupGallery(gallery) {
  return gallery
    .map(
      ({ original, description, preview }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

const addGallary = addMarkupGallery(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", addGallary);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
