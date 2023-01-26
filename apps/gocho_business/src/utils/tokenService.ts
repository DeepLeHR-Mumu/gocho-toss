import { managerTokenDecryptor } from "shared-util/tokenDecryptor";

const getRefreshToken = () => localStorage.getItem("refreshToken") as string;

const getAccessToken = () => localStorage.getItem("accessToken") as string;

const updateAllToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const removeAllToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const tokenService = {
  getRefreshToken,
  getAccessToken,
  updateAllToken,
  removeAllToken,
};

export const getTokenDateInfoCreator = () => {
  const accessTokenData = tokenService.getAccessToken();
  const refreshTokenData = tokenService.getRefreshToken();

  const { exp: accessTokenExp } = managerTokenDecryptor(accessTokenData);
  const { exp: refreshTokenExp } = managerTokenDecryptor(refreshTokenData);
  const accessCreateTime = new Date(accessTokenExp * 1000).getTime();
  const refreshCreateTime = new Date(refreshTokenExp * 1000).getTime();
  const currentTime = new Date().getTime();

  return { accessTokenData, refreshTokenData, currentTime, refreshCreateTime, accessCreateTime };
};
