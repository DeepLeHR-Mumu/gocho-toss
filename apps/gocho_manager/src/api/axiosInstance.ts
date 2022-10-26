import axios from "axios";
import { MANAGER_BACKEND_URL } from "shared-constant/externalURL";

export const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: MANAGER_BACKEND_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken") as string;
  const refreshToken = localStorage.getItem("refreshToken") as string;
  const accessExp = localStorage.getItem("accessExp") as string;
  const refreshExp = localStorage.getItem("refreshExp") as string;

  const date = new Date().getMilliseconds();

  if (!refreshToken || refreshToken === "undefined" || parseInt(refreshExp, 10) < date) {
    localStorage.clear();
    window.location.href = "/login";
  }

  if (parseInt(accessExp, 10) < date) {
    const { data } = await axios.get(`${MANAGER_BACKEND_URL}/auth/refresh`, {
      headers: { "x-refresh-token": refreshToken },
    });

    localStorage.setItem("accessToken", `${data.access_token}`);
    localStorage.setItem("refreshToken", `${data.refresh_token}`);
  }

  return { ...config, headers: { "x-access-token": accessToken } };
});
