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

function onGalleryElClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  console.log("Click");
  evt.preventDefault();
  const UrlBigImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`
        <img src="${UrlBigImg}">
    `);
  instance.show();

  galleryEl.addEventListener("keydown", (evt) => {
    console.log("keydown");
    const visible = basicLightbox.visible();
    if (visible && evt.code === "Escape") {
      instance.close();
    }
  });
}
