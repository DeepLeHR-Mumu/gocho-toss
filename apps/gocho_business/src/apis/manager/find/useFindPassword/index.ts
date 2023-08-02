import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosNoTokenInstance } from "../../../axiosInstance";
import { PostFindPasswordDef, RequestObjDef } from "./type";

const postFindPassword: PostFindPasswordDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/managers/find-password", { ...requestObj });
  return data;
};

export const useFindPassword = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postFindPassword });
