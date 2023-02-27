import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { ResponseObjDef, PostKakaoRegisterDef, RequestObjDef } from "./type";

const postKakaoLogin: PostKakaoRegisterDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const { data } = await axiosInstance.post(
    "/auth/kakao-register",
    { ...requestObj },
    {
      headers: { "x-access-token": token as string },
    }
  );
  return data;
};

export const useDoKakaoRegister = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>(postKakaoLogin);
};
