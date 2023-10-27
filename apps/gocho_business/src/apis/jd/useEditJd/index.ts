import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "../../axiosInstance";
import { PostEditJdDef, RequestObjDef, useEditJdProps } from "./type";

export const putEditJd: PostEditJdDef = async ({ jdId, ...jdDetailObj }) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(jdDetailObj));

  const { data } = await axiosInstance.put(`/jds/${jdId}`, formData);
  return data;
};

export const useEditJd: useEditJdProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: putEditJd });
