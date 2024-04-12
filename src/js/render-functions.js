function createMarkup(arr) {
  return arr
    .map(
      ({
        downloads,
        views,
        comments,
        likes,
        webformatURL,
        tags,
        largeImageURL,
      }) =>
        `<li class="gallery_item">
        <a class="gallery_link" href="${largeImageURL}">
          <img class="gallery_img" src="${webformatURL}" data-sourse="${largeImageURL}" alt="${tags}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${downloads}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${likes}
          </li>
          <li class="gallery_item_params_link current">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${views}
          </li>
          <li class="gallery_item_params_link current">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-form-search"></use>
            </svg>
            ${comments}
          </li>
          </ul>
          </li>
          `
    )
    .join('');
}


export { createMarkup };