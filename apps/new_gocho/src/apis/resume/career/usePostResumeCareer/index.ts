import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeCareerKeyObj } from "@/constants/queryKeyFactory/resume/resumeCareerKeyObj";

import { PostResumeCareerDef, PostResumeCareerResponse, RequestObjDef, UsePostResumeCareerProps } from "./type";

export const postResumeCareer: PostResumeCareerDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/careers`, { ...requestObj });
  return data;
};

export const usePostResumeCareer: UsePostResumeCareerProps = (resumeId) => {
  const queryClient = useQueryClient();
  return useMutation<PostResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeCareer,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeCareerKeyObj.careerArr(resumeId));
    },
  });
};
