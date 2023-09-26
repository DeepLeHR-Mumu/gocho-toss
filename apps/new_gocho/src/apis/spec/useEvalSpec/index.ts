import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { PostEvalSpecDef, PostEvalSpecResponse, RequestObjDef, UseEvalSpecProps } from "./type";

const postEvalSpec: PostEvalSpecDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`specs/${requestObj.specId}/evals`, requestObj.specData);
  return data;
};

export const useEvalSpec: UseEvalSpecProps = () => useMutation<PostEvalSpecResponse, AxiosError, RequestObjDef>({ mutationFn: postEvalSpec });
