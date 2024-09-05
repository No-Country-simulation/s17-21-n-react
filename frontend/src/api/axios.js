import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const configureAxios = (token) => {
  const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: token ? { Authorization: `Bearer ${token}` } : {}, // Solo incluye el token si existe
  });
  return api;
};

export default configureAxios;
