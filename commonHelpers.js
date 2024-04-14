import{a as f,i as d,S as h}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function m(t,r=1){const o="https://pixabay.com/api/",l="42170319-af092c1d236dd53a733e41db9",e=new URLSearchParams({key:l,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}),{data:s}=await f.get(`${o}?${e}`);return s}function p(t){return t.map(({downloads:r,views:o,comments:l,likes:e,webformatURL:s,tags:n,largeImageURL:u})=>`<li class="gallery_item">
        <a class="gallery_link" href="${u}">
          <img class="gallery_img" src="${s}" data-sourse="${u}" alt="${n}" />
        </a>
        <ul class="gallery_item_params">
          <li class="gallery_item_params_link">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-downloads"></use>
            </svg>
            ${r}
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
            ${o}
          </li>
          <li class="gallery_item_params_link current">
            <svg class="gallery_svg" width="24" height="24">
              <use href="../img/sprite.svg#icon-form-search"></use>
            </svg>
            ${l}
          </li>
          </ul>
          </li>
          `).join("")}let i=1,c="";const a={searchForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-more"),loaderWrapper:document.querySelector(".loader")};function y(){a.loaderWrapper.style.display="block"}function g(){a.loaderWrapper.style.display="none"}g();a.searchForm.addEventListener("submit",_);async function _(t){if(t.preventDefault(),c=t.currentTarget.elements.fieldSearch.value,!c){d.error({title:"Error",message:"Please enter a search query!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"});return}i=1,a.list.innerHTML="",y();try{const r=await m(c,i);r.hits.length||d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),a.list.innerHTML=p(r.hits),new h(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh(),i<Math.ceil(r.totalHits/15)&&a.loadBtn.classList.replace("load-more-hidden","load-more")}catch(r){r.statusText}finally{g()}t.target.reset()}a.loadBtn.addEventListener("click",v);async function v(){i+=1,y();try{const t=await m(c,i);i<Math.ceil(t.totalHits/15)&&a.loadBtn.classList.replace("load-more-hidden","load-more"),t.totalHits!==void 0&&i===Math.ceil(t.totalHits/15)&&(a.loadBtn.classList.replace("load-more","load-more-hidden"),d.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"})),a.list.insertAdjacentHTML("beforeend",p(t.hits));const r=new h(".gallery a",{captionDelay:250,captionsData:"alt"}),{height:o}=a.list.querySelector(".gallery_item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),r.refresh()}catch(t){t.statusText}finally{g()}}
//# sourceMappingURL=commonHelpers.js.map
