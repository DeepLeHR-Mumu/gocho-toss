import axios from "axios";

import { MANAGER_BACKEND_URL } from "shared-constant";
import { adminTokenDecryptor, sharedSetLocalStorageItem, sharedGetLocalStorageItem } from "shared-util";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const refreshToken = sharedGetLocalStorageItem("refreshToken");
  const accessExp = sharedGetLocalStorageItem("accessExp");
  const refreshExp = sharedGetLocalStorageItem("refreshExp");

  const date = Math.floor(new Date().getTime() / 1000);

  if (!refreshToken || refreshToken === "undefined" || parseInt(refreshExp, 10) - 10 < date) {
    localStorage.clear();
    window.location.href = "/login";
  }

  if (parseInt(accessExp, 10) - 10 < date) {
    const { data } = await axios.get(`${MANAGER_BACKEND_URL}/auth/refresh`, {
      headers: { "x-refresh-token": refreshToken },
    });

    sharedSetLocalStorageItem({ key: "accessToken", value: data.data.access_token });
    sharedSetLocalStorageItem({ key: "refreshToken", value: data.data.refresh_token });

    const { email, role, exp: accessNewExp } = adminTokenDecryptor(data.data.access_token);
    const { exp: refreshNewExp } = adminTokenDecryptor(data.data.refresh_token);

    sharedSetLocalStorageItem({ key: "email", value: email });
    sharedSetLocalStorageItem({ key: "role", value: role });
    sharedSetLocalStorageItem({ key: "accessExp", value: accessNewExp });
    sharedSetLocalStorageItem({ key: "refreshExp", value: refreshNewExp });
  }

  const newConfig = config;

  newConfig.headers = newConfig.headers ?? {};
  newConfig.headers["x-access-token"] = sharedGetLocalStorageItem("accessToken");

  return newConfig;
});

export const axiosNoTokenInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});
