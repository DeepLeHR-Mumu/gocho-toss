import { managerTokenDecryptor } from "shared-util/tokenDecryptor";
import { tokenService } from "@/utils/tokenService";

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
