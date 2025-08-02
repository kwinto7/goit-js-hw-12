

import { getImagesByQuery } from "./js/pixabay-api";
import {
  clearGallery,
  renderGallery,
  showLoadMoreButton,
  hideLoadMoreButton
} from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const loadMoreButton = document.querySelector(".load-more");

form.addEventListener("submit", handleSubmit);
loadMoreButton.addEventListener("click", onClickHandle); 

let page = 1;
let currentQuery = "";
const perPage = 15;
let totalPages;

function handleSubmit(event) { 

  event.preventDefault();
  hideLoadMoreButton();

  page = 1;

  currentQuery = input.value.trim();
  if (!currentQuery) {
    iziToast.warning({
    title: '',
    message: 'Порожній запит!',
    position: 'topRight',
    timeout: 3000,
  });
    return;
  }

  clearGallery();

  getImagesByQuery(currentQuery, page, perPage)
    .then(data => { 
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: "",
          message: "Зображення не знайдені. Спробуйте інший запит.",
          position: "topRight",
          timeout: 4000,
          close: false,
          maxWidth: 300,
          messageColor: "#fff",
          color: "#e23232"
        });
        return;
      };

      renderGallery(data.hits);
      
      totalPages = Math.ceil(data.totalHits / perPage);
      
      if (page < totalPages) { 
        showLoadMoreButton();
      };
    })
    .catch(error => {
      iziToast.error({
        title: "",
        message: "Помилка запиту. Спробуйте пізніше.",
        position: "topRight",
        timeout: 4000,
      });
      hideLoadMoreButton();
    })
    .finally(() => {
      input.value = "";
      
    });
}

async function onClickHandle() { 
  page++;
  try {
    loadMoreButton.disabled = true;
    const data = await getImagesByQuery(currentQuery, page, perPage);
    renderGallery(data.hits);
    
    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });

    loadMoreButton.disabled = false;
    if (!totalPages || page >= totalPages) { 
      hideLoadMoreButton();
      iziToast.warning({
        title: '',
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
        timeout: 3000,
      });

    }
  } catch (error) { 
    iziToast.error({
      title: '',
      message: error.message || "Помилка при завантаженні зображень.",
      position: 'topRight',
      timeout: 4000,
      });
  };
};






