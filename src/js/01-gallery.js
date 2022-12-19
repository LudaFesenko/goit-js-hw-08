// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const renderItem = item => `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;

const itemsMarkup = galleryItems.map(renderItem).join(' ');

gallery.insertAdjacentHTML('beforeend', itemsMarkup);

new SimpleLightbox('.gallery a', {
  caption: true,
  captionDelay: 250,
  captionsData: 'alt',
});
