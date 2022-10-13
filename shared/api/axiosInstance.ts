import axios from "axios";
import { BACKEND_URL } from "shared-constant/externalURL";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BACKEND_URL,
});
