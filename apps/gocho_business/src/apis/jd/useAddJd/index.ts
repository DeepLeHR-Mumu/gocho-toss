import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../axiosInstance";
import { PostJdDef, RequestObjDef, useAddJdProps } from "./type";

export const postAddJd: PostJdDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));

  const { data } = await axiosInstance.post("/jds", formData);
  return data;
};

export const useAddJd: useAddJdProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postAddJd });
