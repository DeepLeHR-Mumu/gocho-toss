import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis";

import { PostJdDef, RequestObjDef, useAddJdProps } from "./type";

export const postAddJd: PostJdDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);

  const { data } = await axiosInstance.post("/jds", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddJd: useAddJdProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: postAddJd });
