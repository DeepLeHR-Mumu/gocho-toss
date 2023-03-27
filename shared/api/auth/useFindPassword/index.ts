import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { PostFindPasswordDef, RequestObjDef, ResponseObjDef, UseFindPasswordProps } from "./type";

const postFindPassword: PostFindPasswordDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/find-password", { ...requestObj });
  return data;
};

export const useFindPassword: UseFindPasswordProps = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: postFindPassword });
};
