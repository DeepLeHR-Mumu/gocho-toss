import axios from "axios";

import { MANAGER_BACKEND_URL } from "shared-constant";
import { adminTokenDecryptor } from "shared-util";
import { userSetLocalStorageItem, userGetLocalStoargetItem, userAllLocalStorageItem } from "@/utils";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const userObjInfo = userGetLocalStoargetItem("USER");

  if (!userObjInfo) {
    userAllLocalStorageItem();
    window.location.href = "/login";
    throw new axios.Cancel("유저 정보가 존재하지 않으므로 로그인 페이지 이동");
  }

  const date = Math.floor(new Date().getTime() / 1000);

  if (
    !userObjInfo.refreshToken ||
    userObjInfo.refreshToken === "undefined" ||
    parseInt(`${userObjInfo.refreshExp}`, 10) - 10 < date
  ) {
    userAllLocalStorageItem();
    window.location.href = "/login";
  }

  if (parseInt(`${userObjInfo.accessExp}`, 10) - 10 < date) {
    const { data } = await axios.get(`${MANAGER_BACKEND_URL}/auth/refresh`, {
      headers: { "x-refresh-token": userObjInfo.refreshToken },
    });

    const { exp: accessNewExp } = adminTokenDecryptor(data.data.access_token);
    const { exp: refreshNewExp } = adminTokenDecryptor(data.data.refresh_token);

    userSetLocalStorageItem("USER", {
      accessToken: data.data.access_token,
      refreshToken: data.data.refresh_token,
      accessExp: accessNewExp,
      refreshExp: refreshNewExp,
    });
  }

  return {
    ...config,
    headers: {
      "x-access-token": userGetLocalStoargetItem("USER")?.accessToken as string,
    },
  };
});

export const axiosNoTokenInstance = axios.create({
  timeout: 10000,
  baseURL: MANAGER_BACKEND_URL,
});
