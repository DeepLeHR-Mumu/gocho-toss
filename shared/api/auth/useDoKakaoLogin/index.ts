import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { ResponseObjDef, useDoLoginProps, PostKakaoLoginDef, RequestObjDef } from "./type";

const postKakaoLogin: PostKakaoLoginDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/kakao-login", { ...requestObj });

  return data;
};

export const useDoKakaoLogin: useDoLoginProps = () => {
  const mutationResult = useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: postKakaoLogin });
  return mutationResult;
};
