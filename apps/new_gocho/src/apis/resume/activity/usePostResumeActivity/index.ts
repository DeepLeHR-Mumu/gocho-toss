import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { PostResumeActivityDef, PostResumeActivityResponse, RequestObjDef, UsePostResumeActivityProps } from "./type";

const postResumeActivity: PostResumeActivityDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/activities`, { requestObj });
  return data;
};

export const usePostResumeActivity: UsePostResumeActivityProps = () =>
  useMutation<PostResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeActivity,
  });
