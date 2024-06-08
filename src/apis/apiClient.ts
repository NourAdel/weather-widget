import axios from "axios";

export const apiClient = axios.create();

apiClient.interceptors.request.use((config) => {
  config.headers["X-RapidAPI-Key"] =
    "0f85e33055mshb2d116d12997e82p11fcc0jsnd17f3a25ce20";
  config.headers["X-RapidAPI-Host"] = "weatherapi-com.p.rapidapi.com";

  return config;
});
