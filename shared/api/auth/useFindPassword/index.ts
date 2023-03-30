import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { PostFindPasswordDef, RequestObjDef, ResponseObjDef, UseFindPasswordProps } from "./type";

const postFindPassword: PostFindPasswordDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/find-password", { ...requestObj });
  return data;
};

export const useFindPassword: UseFindPasswordProps = () => {
  return useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: postFindPassword });
};
