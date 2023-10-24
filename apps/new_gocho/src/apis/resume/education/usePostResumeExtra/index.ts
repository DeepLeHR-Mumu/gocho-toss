import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import { PostResumeExtraDef, PostResumeExtraResponse, RequestObjDef, UsePostResumeExtraProps } from "./type";

export const postResumeExtra: PostResumeExtraDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/educations/extras`, { ...requestObj });
  return data;
};

export const usePostResumeExtra: UsePostResumeExtraProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PostResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeExtra,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
