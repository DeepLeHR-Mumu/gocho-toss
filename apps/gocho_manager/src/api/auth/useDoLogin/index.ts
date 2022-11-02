import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { MANAGER_BACKEND_URL } from "shared-constant/externalURL";
import { PostLoginDef, RequestObjDef, ResponseObjDef, useDoLoginProps } from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axios.post(`${MANAGER_BACKEND_URL}/auth/login/admin`, { ...requestObj });
  return data;
};

export const useDoLogin: useDoLoginProps = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>(postLogin);
};
