import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { PostManagersRegisterDef, RequestObjDef } from "./type";

const postManagersRegister: PostManagersRegisterDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/managers/register", { ...requestObj });
  return data;
};

export const useManagerRegister = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postManagersRegister });
