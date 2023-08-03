import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { PostManagerCheckEmailDef, managerCheckEmailKeyObj, ResponseObjDef, RequestObjDef } from "./type";

export const postManagersCheckEmail: PostManagerCheckEmailDef = async (request: RequestObjDef) => {
  const { data } = await axiosNoTokenInstance.post("/managers/check-email", { email: request.email });
  return data;
};

export const useCheckEmail = () =>
  useMutation<ResponseObjDef, AxiosError<ErrorResponseDef>, RequestObjDef, typeof managerCheckEmailKeyObj.all>({
    mutationFn: (requestObj) => postManagersCheckEmail(requestObj),
  });
