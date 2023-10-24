import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import { PostResumeCollegeDef, PostResumeCollegeResponse, RequestObjDef, UsePostResumeCollegeProps } from "./type";

export const postResumeCollege: PostResumeCollegeDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/educations/colleges`, { ...requestObj });
  return data;
};

export const usePostResumeCollege: UsePostResumeCollegeProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PostResumeCollegeResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeCollege,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
