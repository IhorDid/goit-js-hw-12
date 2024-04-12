(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(i){const t="https://pixabay.com/api/",s="42170319-af092c1d236dd53a733e41db9",l=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${l}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function u(i){return i.map(({downloads:t,views:s,comments:l,likes:e,webformatURL:r,tags:a,largeImageURL:o})=>`<li class="gallery_item">
        <a class="gallery_link" href="${o}">
          <img class="gallery_img" src="${r}" data-sourse="${o}" alt="${a}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${t}
          </li>
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-heart"></use>
            </svg>
            ${e}
          </li>
          <li class="gallery_item_params_link current">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-search"></use>
            </svg>
            ${s}
          </li>
          <li class="gallery_item_params_link current">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-form-search"></use>
            </svg>
            ${l}
          </li>
          </ul>
          </li>
          `).join("")}const n={searchForm:document.querySelector("#present_form"),list:document.querySelector(".gallery")};n.searchForm.addEventListener("submit",g);function g(i){i.preventDefault();const t=i.currentTarget.elements.fieldSearch;c(t.value).then(s=>{s.hits.length||iziToast.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),n.list.innerHTML=u(s.hits)}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
