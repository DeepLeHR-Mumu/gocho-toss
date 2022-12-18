import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../useAxiosInterceptor";

import { PostLoginDef, RequestObjDef, ResponseObjDef, useDoLoginProps, LoginErrorValuesDef } from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/login", { ...requestObj });
  return data;
};

export const useDoLogin: useDoLoginProps = () =>
  useMutation<ResponseObjDef, AxiosError<LoginErrorValuesDef>, RequestObjDef>(postLogin);
