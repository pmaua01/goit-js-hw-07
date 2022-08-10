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

galleryEl.addEventListener("click", onGalleryElClick);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onGalleryElClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  evt.preventDefault();
}
