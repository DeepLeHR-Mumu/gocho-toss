import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { PostKakaoLoginDef, RequestObjDef, ResponseObjDef, useDoLoginProps } from "./type";

const postKakaoLogin: PostKakaoLoginDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/kakao", { ...requestObj });
  return data;
};

export const useDoKakaoLogin: useDoLoginProps = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: postKakaoLogin });
};
