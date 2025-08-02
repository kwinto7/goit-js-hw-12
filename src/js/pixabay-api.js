import axios from "axios";
import { showLoader, hideLoader } from "./render-functions";

const API_KEY = "51435495-8626d86cd8f20f3f9ed789055";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1, perPage) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: perPage,
    page
  };
  try {
    showLoader();   
    const { data } = await axios(BASE_URL, { params });
    hideLoader();
    return data; 
  } catch(error) { 
    iziToast.error({
          title: "",
          message: "Помилка виконання запиту. Спробуйте ще раз.",
          position: "topRight",
          timeout: 4000,
          close: false,
          maxWidth: 300,
          messageColor: "#fff",
          color: "#e23232"
        });
  };
};