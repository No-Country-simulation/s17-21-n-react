import axios from "axios";
import useUserStore from "../store/auth";

const baseURL = import.meta.env.VITE_BASE_URL;

const configureAxios = () => {
  const api = axios.create({
    baseURL,
    withCredentials: false, 
  });

  api.interceptors.request.use(
    (config) => {
      if (!config.url.includes("/auth/")) {
        const token = useUserStore.getState().token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};

export default configureAxios;
