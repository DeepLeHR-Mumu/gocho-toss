import axios from "axios";

import { MANAGER_BACKEND_URL } from "shared-constant/externalURL";
import { adminTokenDecryptor } from "shared-util";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("accessToken") as string;
  const refreshToken = localStorage.getItem("refreshToken") as string;
  const accessExp = localStorage.getItem("accessExp") as string;
  const refreshExp = localStorage.getItem("refreshExp") as string;

  const date = Math.floor(new Date().getTime() / 1000);

  if (!refreshToken || refreshToken === "undefined" || parseInt(refreshExp, 10) - 10 < date) {
    localStorage.clear();
    window.location.href = "/login";
  }

  if (parseInt(accessExp, 10) - 10 < date) {
    const { data } = await axios.get(`${MANAGER_BACKEND_URL}/auth/refresh`, {
      headers: { "x-refresh-token": refreshToken },
    });

    localStorage.setItem("accessToken", `${data.data.access_token}`);
    localStorage.setItem("refreshToken", `${data.data.refresh_token}`);

    accessToken = localStorage.getItem("accessToken") as string;

    const { email, role, exp: accessNewExp } = adminTokenDecryptor(data.data.access_token);
    const { exp: refreshNewExp } = adminTokenDecryptor(data.data.refresh_token);

    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
    localStorage.setItem("accessExp", String(accessNewExp));
    localStorage.setItem("refreshExp", String(refreshNewExp));
  }

  const newConfig = config;

  newConfig.headers = newConfig.headers ?? {};
  newConfig.headers["x-access-token"] = accessToken;

  return newConfig;
});

export const axiosNoTokenInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});
