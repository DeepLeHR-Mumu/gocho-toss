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
