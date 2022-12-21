import axios from "axios";
import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BUSINESS_BACKEND_URL,
});
