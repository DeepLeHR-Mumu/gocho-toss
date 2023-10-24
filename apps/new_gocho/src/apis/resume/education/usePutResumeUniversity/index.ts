import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import {
  PutResumeUniversityDef,
  PutResumeUniversityResponse,
  RequestObjDef,
  UsePutResumeUniversityProps,
} from "./type";

export const putResumeUniversity: PutResumeUniversityDef = async ({ resumeId, universityId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/educations/universities/${universityId}`, {
    ...requestObj,
  });
  return data;
};

export const usePutResumeUniversity: UsePutResumeUniversityProps = (resumId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeUniversity,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumId));
    },
  });
};
