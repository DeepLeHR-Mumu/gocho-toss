import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { PostEvalSpecDef, PostEvalSpecResponse, RequestObjDef, UseEvalSpecProps } from "./type";

const postEvalSpec: PostEvalSpecDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(`specs/${requestObj.specId}/evals`, requestObj.specData, { headers });
  return data;
};

export const useEvalSpec: UseEvalSpecProps = () => {
  return useMutation<PostEvalSpecResponse, AxiosError, RequestObjDef>({ mutationFn: postEvalSpec });
};
