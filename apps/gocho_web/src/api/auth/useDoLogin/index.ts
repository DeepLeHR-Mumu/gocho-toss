import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";

import {
  ResponseObjDef,
  useDoLoginProps,
  PostLoginDef,
  RequestObjDef,
} from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/login", { ...requestObj });
  return data;
};

export const useDoLogin: useDoLoginProps = () => {
  const mutationResult =
    useMutation<ResponseObjDef, AxiosError, RequestObjDef>(postLogin);
  return mutationResult;
};
