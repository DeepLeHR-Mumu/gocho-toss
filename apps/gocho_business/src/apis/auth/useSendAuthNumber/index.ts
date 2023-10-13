import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { PostSendAuthNumberDef, RequestObjDef } from "./type";

const postSendAuthNumber: PostSendAuthNumberDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/sms/send", { ...requestObj });
  return data;
};

export const useSendAuthNumber = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postSendAuthNumber });
