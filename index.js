import{S,a as C,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const y=document.querySelector(".gallery"),r=document.querySelector(".loader"),b=document.querySelector(".load-more"),x=document.createElement("style");x.textContent=`
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
`;document.head.appendChild(x);function q(i){return i.map(({webformatURL:t,tags:a,likes:s,views:e,comments:o,downloads:l,largeImageURL:L})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${L}">
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
  `).join("")}function R(){r.classList.remove("hidden"),r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.zIndex="9999",r.style.backgroundColor="rgba(0, 0, 0, 0.2)",r.style.padding="20px",r.style.borderRadius="50%"}function $(){r.classList.add("hidden")}let m=null;function v(i){const t=q(i);y.insertAdjacentHTML("beforeend",t),m?m.refresh():m=new S(".gallery a",{captionData:"alt",captionDelay:250})}function B(){y.innerHTML=""}function M(){b.classList.remove("hidden")}function p(){b.classList.add("hidden")}const z="51435495-8626d86cd8f20f3f9ed789055",E="https://pixabay.com/api/";async function w(i,t=1,a){const s={key:z,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:t};try{R();const{data:e}=await C(E,{params:s});return $(),e}catch{iziToast.error({title:"",message:"Помилка виконання запиту. Спробуйте ще раз.",position:"topRight",timeout:4e3,close:!1,maxWidth:300,messageColor:"#fff",color:"#e23232"})}}const P=document.querySelector(".form"),g=document.querySelector(".form input"),f=document.querySelector(".load-more");P.addEventListener("submit",H);f.addEventListener("click",O);let n=1,d="";const h=15;let u;function H(i){if(i.preventDefault(),p(),n=1,d=g.value.trim(),!d){c.warning({title:"",message:"Порожній запит!",position:"topRight",timeout:3e3});return}B(),w(d,n,h).then(t=>{if(!t.hits||t.hits.length===0){c.error({title:"",message:"Зображення не знайдені. Спробуйте інший запит.",position:"topRight",timeout:4e3,close:!1,maxWidth:300,messageColor:"#fff",color:"#e23232"});return}v(t.hits),u=Math.ceil(t.totalHits/h),n<u&&M()}).catch(t=>{c.error({title:"",message:"Помилка запиту. Спробуйте пізніше.",position:"topRight",timeout:4e3}),p()}).finally(()=>{g.value=""})}async function O(){n++;try{f.disabled=!0;const i=await w(d,n,h);v(i.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),f.disabled=!1,(!u||n>=u)&&(p(),c.warning({title:"",message:"We're sorry, but you've reached the end of search results",position:"topRight",timeout:3e3}))}catch(i){c.error({title:"",message:i.message||"Помилка при завантаженні зображень.",position:"topRight",timeout:4e3})}}
//# sourceMappingURL=index.js.map
