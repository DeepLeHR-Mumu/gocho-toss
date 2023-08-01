import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../axiosInstance";
import { PostEditJdDef, RequestObjDef, useEditJdProps } from "./type";

export const putEditJd: PostEditJdDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));

  const { data } = await axiosInstance.put(`/jds/${requestObj.jdId}`, formData);
  return data;
};

export const useEditJd: useEditJdProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: putEditJd });
