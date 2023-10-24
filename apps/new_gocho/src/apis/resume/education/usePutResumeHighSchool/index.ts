import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import {
  PutResumeHighSchoolDef,
  PutResumeHighSchoolResponse,
  RequestObjDef,
  UsePutResumeHighSchoolProps,
} from "./type";

export const putResumeHighSchool: PutResumeHighSchoolDef = async ({ resumeId, highschoolId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/educations/highschools/${highschoolId}`, {
    ...requestObj,
  });
  return data;
};

export const usePutResumeHighSchool: UsePutResumeHighSchoolProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeHighSchoolResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeHighSchool,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
