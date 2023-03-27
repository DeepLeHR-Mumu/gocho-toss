import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { PostLoginDef, RequestObjDef, ResponseObjDef, useDoLoginProps } from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/login", { ...requestObj });
  return data;
};

export const useDoLogin: useDoLoginProps = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: postLogin });
};
