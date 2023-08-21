import axios from "axios";

const strapiApiURL = import.meta.env.VITE_STRAPI_API_URL;
const strapiApiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

export const makeRequest = axios.create({
  baseURL: strapiApiURL,
  headers: {
    Authorization: "bearer " + strapiApiToken,
  },
});
