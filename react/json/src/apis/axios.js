import axios from "axios";
import { getCookie } from "../utils/cookies";

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    header: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });
  instance.defaults.timeout = 3000;
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie("accessToken");
      if (token) request.headers["Authorization"] = `Bearer ${token}`;

      return request;
    },
    (error) => {
      console.log(erroe);
      return Promise.reject(error);
    }
  );
};

export const axiosInstance = getAxiosInstance();
