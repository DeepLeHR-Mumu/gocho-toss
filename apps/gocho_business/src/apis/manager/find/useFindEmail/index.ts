import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosNoTokenInstance } from "../../../axiosInstance";
import { PostFindEmailDef, RequestObjDef } from "./type";

const postFindEmail: PostFindEmailDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/managers/find-email", { ...requestObj });
  return data;
};

export const useFindEmail = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postFindEmail });
