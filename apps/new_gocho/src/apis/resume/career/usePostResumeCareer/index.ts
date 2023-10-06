import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { PostResumeCareerDef, PostResumeCareerResponse, RequestObjDef, UsePostResumeCareerProps } from "./type";

export const postResumeCareer: PostResumeCareerDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/careers`, { ...requestObj });
  return data;
};

export const usePostResumeCareer: UsePostResumeCareerProps = () =>
  useMutation<PostResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeCareer,
  });
