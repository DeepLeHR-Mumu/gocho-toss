import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { ResponseObjDef, useDoLoginProps, PostLoginDef, RequestObjDef } from "./type";

const postKakaoLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/login", { ...requestObj });
  return data;
};

export const useDoKakaoLogin: useDoLoginProps = () => {
  const mutationResult = useMutation<ResponseObjDef, AxiosError, RequestObjDef>(postKakaoLogin);
  return mutationResult;
};
