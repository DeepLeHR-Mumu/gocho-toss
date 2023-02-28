import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { ResponseObjDef, UseFindPasswordProps, PostFindPasswordDef, RequestObjDef } from "./type";

const postFindPassword: PostFindPasswordDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/find-password", { ...requestObj });

  return data;
};

export const useFindPassword: UseFindPasswordProps = () => {
  const mutationResult = useMutation<ResponseObjDef, AxiosError, RequestObjDef>({ mutationFn: postFindPassword });
  return mutationResult;
};
