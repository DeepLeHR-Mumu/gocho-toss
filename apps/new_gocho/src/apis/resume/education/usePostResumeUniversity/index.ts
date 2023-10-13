import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import {
  PostResumeUniversityDef,
  PostResumeUniversityResponse,
  RequestObjDef,
  UsePostResumeUniversityProps,
} from "./type";

export const postResumeUniversity: PostResumeUniversityDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/educations/colleges`, { ...requestObj });
  return data;
};

export const usePostResumeUniversity: UsePostResumeUniversityProps = () =>
  useMutation<PostResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeUniversity,
  });
