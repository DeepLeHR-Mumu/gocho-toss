import { axiosNoTokenInstance } from "../../useIsRefreshLock";

export const getPass = async () => {
  const response = await axiosNoTokenInstance.get("/auth/pass");

  return response;
};

export const getPassCheck = async (tokenVersionId: string) => {
  const response = await axiosNoTokenInstance.get(`/auth/pass/check?tokenVersionId=${tokenVersionId}`);

  return response;
};
