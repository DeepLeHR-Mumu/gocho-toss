import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeFluencyDef, RequestObjDef, UseDeleteResumeFluencyProps } from "./type";

export const deleteResumeFluency: DeleteResumeFluencyDef = async ({ resumeId, fluencyId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/fluencies/${fluencyId}`);

  return data;
};

// TODO: 삭제된 후 로직 생각하기
export const useDeleteResumeFluency: UseDeleteResumeFluencyProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeFluency,
  });
