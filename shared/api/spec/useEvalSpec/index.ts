import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { PostEvalSpecResponse, UseEvalSpecProps, PostEvalSpecDef, RequestObjDef } from "./type";

const postEvalSpec: PostEvalSpecDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(`specs/${requestObj.specId}/evals`, requestObj.specData, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useEvalSpec: UseEvalSpecProps = () => {
  const mutationResult = useMutation<PostEvalSpecResponse, AxiosError, RequestObjDef>({ mutationFn: postEvalSpec });
  return mutationResult;
};
