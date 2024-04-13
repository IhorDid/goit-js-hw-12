import{a as c,i as u}from"./assets/vendor-632f698a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function g(i,t=1){const s="https://pixabay.com/api/",a="42170319-af092c1d236dd53a733e41db9",e=new URLSearchParams({key:a,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}),{data:r}=await c.get(`${s}?${e}`);return r}function m(i){return i.map(({downloads:t,views:s,comments:a,likes:e,webformatURL:r,tags:o,largeImageURL:l})=>`<li class="gallery_item">
        <a class="gallery_link" href="${l}">
          <img class="gallery_img" src="${r}" data-sourse="${l}" alt="${o}" />
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
            ${a}
          </li>
          </ul>
          </li>
          `).join("")}const n={searchForm:document.querySelector("#present_form"),list:document.querySelector(".gallery"),loadBtn:document.querySelector(".js-load-more")};n.searchForm.addEventListener("submit",h);function h(i){i.preventDefault();const t=i.currentTarget.elements.fieldSearch;g(t.value,1).then(s=>{s.hits.length||u.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"rgba(252, 249, 249, 1)",messageColor:"#000",zindex:"10000000"}),n.list.innerHTML=m(s.hits)}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
