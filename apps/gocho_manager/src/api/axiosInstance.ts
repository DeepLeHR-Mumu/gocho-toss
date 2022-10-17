import axios from "axios";
import { MANAGER_BACKEND_URL } from "shared-constant/externalURL";

export const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: MANAGER_BACKEND_URL,
});
