import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";
import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeEducationDef, RequestObjDef, UseDeleteResumeEducationProps } from "./type";

export const deleteResumeEducation: DeleteResumeEducationDef = async ({ resumeId, educationId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/educations/${educationId}`);

  return data;
};

export const useDeleteResumeEducation: UseDeleteResumeEducationProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeEducation,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
