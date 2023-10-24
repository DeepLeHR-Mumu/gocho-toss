import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import {
  PostResumeUniversityDef,
  PostResumeUniversityResponse,
  RequestObjDef,
  UsePostResumeUniversityProps,
} from "./type";

export const postResumeUniversity: PostResumeUniversityDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/educations/universities`, requestObj);
  return data;
};

export const usePostResumeUniversity: UsePostResumeUniversityProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PostResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeUniversity,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
