import { servisePixabay } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const elements = {
  searchForm: document.querySelector('#present_form'),
  list: document.querySelector('.gallery'),
};

elements.searchForm.addEventListener('submit', onSearchClick);

function onSearchClick(e) {
  e.preventDefault();
  const searchInput = e.currentTarget.elements.fieldSearch;
  servisePixabay(searchInput.value)
    .then(data => {
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
    })
    .catch(err => console.log(err));
}
