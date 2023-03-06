import axios from "axios";
import { BACKEND_URL, NEW_BACKEND_URL, MANAGER_BACKEND_URL } from "shared-constant";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BACKEND_URL,
});

export const axiosNewInstance = axios.create({
  timeout: 10000,
  baseURL: NEW_BACKEND_URL,
});

export const axiosManagerInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});
