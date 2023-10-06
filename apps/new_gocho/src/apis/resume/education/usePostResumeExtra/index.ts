import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { PostResumeExtraDef, PostResumeExtraResponse, RequestObjDef, UsePostResumeExtraProps } from "./type";

export const postResumeExtra: PostResumeExtraDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/educations/extras`, { ...requestObj });
  return data;
};

export const usePostResumeExtra: UsePostResumeExtraProps = () =>
  useMutation<PostResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeExtra,
  });
