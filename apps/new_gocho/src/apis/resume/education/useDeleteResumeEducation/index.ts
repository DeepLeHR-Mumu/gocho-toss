import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeEducationDef, RequestObjDef, UseDeleteResumeEducationProps } from "./type";

export const deleteResumeEducation: DeleteResumeEducationDef = async ({ resumeId, educationId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/educations/${educationId}`);

  return data;
};

// TODO: 삭제된 후 로직 생각하기
export const useDeleteResumeEducation: UseDeleteResumeEducationProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeEducation,
  });
