import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { servisePixabay } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

let page = 1;
let searchInput = '';

const elements = {
  searchForm: document.querySelector('#present_form'),
  list: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.js-load-more'),
  loaderWrapper: document.querySelector('.loader'),
};

function showLoader() {
  elements.loaderWrapper.style.display = 'block';
}

function hideLoader() {
  elements.loaderWrapper.style.display = 'none';
}
hideLoader();
elements.searchForm.addEventListener('submit', onSearchClick);

async function onSearchClick(e) {
  e.preventDefault();
  searchInput = e.currentTarget.elements.fieldSearch.value;
  if (!searchInput) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topCenter',
      backgroundColor: 'rgba(252, 249, 249, 1)',
      messageColor: '#000',
      zindex: '10000000',
    });
    return;
  }
  page = 1;
  elements.list.innerHTML = '';
  showLoader();
  try {
    const data = await servisePixabay(searchInput, page);
    if (!data.hits.length) {
      iziToast.show({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
        backgroundColor: 'rgba(252, 249, 249, 1)',
        messageColor: '#000',
        zindex: '10000000',
      });
    }
    elements.list.innerHTML = createMarkup(data.hits);
    const galleryList = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
    });
    galleryList.refresh();
    if (page < Math.ceil(data.totalHits / 15)) {
      elements.loadBtn.classList.replace('load-more-hidden', 'load-more');
    }
  } catch (err) {
    err.statusText;
  } finally {
    hideLoader();
  }
  e.target.reset();
}

elements.loadBtn.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  page += 1;
  showLoader();
  try {
    const data = await servisePixabay(searchInput, page);
    if (page < Math.ceil(data.totalHits / 15)) {
      elements.loadBtn.classList.replace('load-more-hidden', 'load-more');
    }
    if (
      data.totalHits !== undefined &&
      page === Math.ceil(data.totalHits / 15)
    ) {
      elements.loadBtn.classList.replace('load-more', 'load-more-hidden');
      iziToast.show({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter',
        backgroundColor: 'rgba(252, 249, 249, 1)',
        messageColor: '#000',
        zindex: '10000000',
      });
    }
    elements.list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    const galleryList = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
    });
    const { height } = elements.list
      .querySelector('.gallery_item')
      .getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
    galleryList.refresh();
  } catch (err) {
    err.statusText;
  } finally {
    hideLoader();
  }
}
