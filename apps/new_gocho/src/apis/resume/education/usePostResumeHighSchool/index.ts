import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import {
  PostResumeHighSchoolDef,
  PostResumeHighSchoolResponse,
  RequestObjDef,
  UsePostResumeHighSchoolProps,
} from "./type";

export const postResumeHighSchool: PostResumeHighSchoolDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/educations/highschools`, requestObj);
  return data;
};

export const usePostResumeHighSchool: UsePostResumeHighSchoolProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PostResumeHighSchoolResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeHighSchool,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
