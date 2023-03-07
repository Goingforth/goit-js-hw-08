// Add imports above this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// // Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refGalleryImg = document.querySelector('.gallery');

const galleryMarkup = createGalleryImg(galleryItems);

refGalleryImg.insertAdjacentHTML('beforeend', galleryMarkup);

refGalleryImg.addEventListener('click', onGalleryImgClick);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
    })
    .join(' ');
}

function onGalleryImgClick(event) {
  event.preventDefault();
}
