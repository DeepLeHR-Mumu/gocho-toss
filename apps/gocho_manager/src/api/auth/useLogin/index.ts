import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";

import { PostLoginDef, RequestObjDef, ResponseObjDef, useDoLoginProps } from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/admin/login", { ...requestObj });
  return data;
};

export const useLogin: useDoLoginProps = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>(postLogin);
};
