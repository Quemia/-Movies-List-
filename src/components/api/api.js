import axios from "axios";

const api = axios.create({
  baseURL: "https://ghibliapi.dev",
});

export default api;
