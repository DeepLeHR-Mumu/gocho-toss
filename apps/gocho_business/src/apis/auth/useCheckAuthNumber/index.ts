import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { PostCheckAuthNumberDef, RequestObjDef } from "./type";

const postCheckAuthNumber: PostCheckAuthNumberDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/sms/check", { ...requestObj });
  return data;
};

export const useCheckAuthNumber = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postCheckAuthNumber });
