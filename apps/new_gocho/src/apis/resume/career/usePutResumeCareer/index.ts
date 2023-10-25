import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeCareerKeyObj } from "@/constants/queryKeyFactory/resume/resumeCareerKeyObj";

import { PutResumeCareerDef, PutResumeCareerResponse, RequestObjDef, UsePostResumeCareerProps } from "./type";

export const putResumeCareer: PutResumeCareerDef = async ({ resumeId, careerId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/careers/${careerId}`, { ...requestObj });
  return data;
};

export const usePutResumeCareer: UsePostResumeCareerProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeCareer,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeCareerKeyObj.careerArr(resumeId));
    },
  });
};
