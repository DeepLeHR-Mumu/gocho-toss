import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeCareerKeyObj } from "@/constants/queryKeyFactory/resume/resumeCareerKeyObj";

import { DeleteResumeCareerDef, RequestObjDef, UseDeleteResumeCareerProps } from "./type";

export const deleteResumeCareer: DeleteResumeCareerDef = async ({ resumeId, careerId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/careers/${careerId}`);

  return data;
};

export const useDeleteResumeCareer: UseDeleteResumeCareerProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeCareer,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeCareerKeyObj.careerArr(resumeId));
    },
  });
};
