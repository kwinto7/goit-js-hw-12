
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreButton = document.querySelector(".load-more");

const loaderStyles = document.createElement("style");
loaderStyles.textContent = `
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
`;
document.head.appendChild(loaderStyles);

export function createGallery(images) { 
  return images.map(({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}" 
/>
      </a>
      <div class="item-description-wrap">
        <div class="description-item" style="">
          <h3 class="item-title">Likes</h3>
          <p class="item-text">${likes}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Views</h3>
          <p class="item-text">${views}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Comments</h3>
          <p class="item-text">${comments}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Downloads</h3>
          <p class="item-text">${downloads}</p>
        </div>
      </div>
    </li>
  `).join("");
}

export function showLoader() { 
  loader.classList.remove("hidden");
  loader.style.position = "fixed";
  loader.style.top = "50%";
  loader.style.left = "50%";
  loader.style.transform = "translate(-50%, -50%)";
  loader.style.zIndex = "9999";
  loader.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  loader.style.padding = "20px";
  loader.style.borderRadius = "50%";
}

export function hideLoader() { 
  loader.classList.add("hidden");
}

let lightbox = null;

export function renderGallery(images) { 
  const markup = createGallery(images);
  gallery.insertAdjacentHTML("beforeend", markup);
    if (lightbox) {
    lightbox.refresh()
    } else { 
      lightbox = new SimpleLightbox(".gallery a", {
        captionData: "alt",
        captionDelay: 250,
      });
    }
}

export function updateLightBox() { 
  if (lightbox) {
    lightbox.refresh()
  } else { 
    lightbox = new SimpleLightbox(".gallery a", {
      captionData: "alt",
      captionDelay: 250,
    });
  }
}

export function clearGallery() { 
  gallery.innerHTML = "";
}

export function showLoadMoreButton() {
  loadMoreButton.classList.remove("hidden");
}
 
export function hideLoadMoreButton() {
  loadMoreButton.classList.add("hidden");
 }


