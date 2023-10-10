import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeCarrerDef, RequestObjDef, UseDeleteResumeCarrerProps } from "./type";

export const deleteResumeCarrer: DeleteResumeCarrerDef = async ({ resumeId, careerId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/careers/${careerId}`);

  return data;
};

// TODO: 삭제된 후 로직 생각하기
export const useDeleteResumeCarrer: UseDeleteResumeCarrerProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeCarrer,
  });
