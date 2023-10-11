import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { PostResumeFluencyResponse, UsePostResumeFluencyProps, RequestObjDef, PostResumeFluencyDef } from "./type";

export const postResumeFluency: PostResumeFluencyDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/fluencies`, { ...requestObj });
  return data;
};

export const usePostResumeFluency: UsePostResumeFluencyProps = () =>
  useMutation<PostResumeFluencyResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeFluency,
  });
