import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis";

import { PostEditJdDef, RequestObjDef, useEditJdProps } from "./type";

export const putEditJd: PostEditJdDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);

  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useEditJd: useEditJdProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: putEditJd });
