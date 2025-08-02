import{S as q,a as g,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const x=document.querySelector(".gallery"),r=document.querySelector(".loader"),v=document.querySelector(".load-more"),w=document.createElement("style");w.textContent=`
 .loader {
  color: #FFF;
  display: inline-block;
  position: relative;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  width: 5px;
  height: 5px;
  background: currentColor;
  position: absolute;
  bottom: 10px;
  right: -5px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}
.hidden {
display: none;
}

@keyframes animloader {
  0% {
    box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 10px 0 white, 20px 0 white;
  }
}
`;document.head.appendChild(w);function R(i){return i.map(({webformatURL:t,tags:a,likes:s,views:e,comments:o,downloads:l,largeImageURL:C})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${C}">
        <img class="gallery-img" src="${t}" alt="${a}" 
/>
      </a>
      <div class="item-description-wrap">
        <div class="description-item" style="">
          <h3 class="item-title">Likes</h3>
          <p class="item-text">${s}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Views</h3>
          <p class="item-text">${e}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Comments</h3>
          <p class="item-text">${o}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Downloads</h3>
          <p class="item-text">${l}</p>
        </div>
      </div>
    </li>
  `).join("")}function $(){r.classList.remove("hidden"),r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.zIndex="9999",r.style.backgroundColor="rgba(0, 0, 0, 0.2)",r.style.padding="20px",r.style.borderRadius="50%"}function B(){r.classList.add("hidden")}let m=null;function L(i){const t=R(i);x.insertAdjacentHTML("beforeend",t),m?m.refresh():m=new q(".gallery a",{captionData:"alt",captionDelay:250})}function M(){x.innerHTML=""}function z(){v.classList.remove("hidden")}function p(){v.classList.add("hidden")}const E="51435495-8626d86cd8f20f3f9ed789055",y="https://pixabay.com/api/";async function S(i,t=1,a){const s={key:E,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:t};try{$();const e=await g(y,{params:s});console.log(e);const{data:o}=await g(y,{params:s});return B(),o}catch{iziToast.error({title:"",message:"Помилка виконання запиту. Спробуйте ще раз.",position:"topRight",timeout:4e3,close:!1,maxWidth:300,messageColor:"#fff",color:"#e23232"})}}const P=document.querySelector(".form"),b=document.querySelector(".form input"),f=document.querySelector(".load-more");P.addEventListener("submit",H);f.addEventListener("click",O);let n=1,d="";const h=15;let u;function H(i){if(i.preventDefault(),p(),n=1,d=b.value.trim(),!d){c.warning({title:"",message:"Порожній запит!",position:"topRight",timeout:3e3});return}M(),S(d,n,h).then(t=>{if(!t.hits||t.hits.length===0){c.error({title:"",message:"Зображення не знайдені. Спробуйте інший запит.",position:"topRight",timeout:4e3,close:!1,maxWidth:300,messageColor:"#fff",color:"#e23232"});return}L(t.hits),u=Math.ceil(t.totalHits/h),console.log(u),n<u&&z()}).catch(t=>{c.error({title:"",message:"Помилка запиту. Спробуйте пізніше.",position:"topRight",timeout:4e3}),p()}).finally(()=>{b.value=""})}async function O(){n++;try{f.disabled=!0;const i=await S(d,n,h);console.log(d,n,i.hits),L(i.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),f.disabled=!1,(!u||n>=u)&&(p(),c.warning({title:"",message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3}))}catch(i){c.error({title:"",message:i.message||"Помилка при завантаженні зображень.",position:"topRight",timeout:4e3})}}
//# sourceMappingURL=index.js.map
