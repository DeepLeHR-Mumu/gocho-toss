import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import {
  PostResumeCertificationDef,
  PostResumeCertificationResponse,
  RequestObjDef,
  UsePostResumeCertificationProps,
} from "./type";

export const postResumeCerification: PostResumeCertificationDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/certifications`, { ...requestObj });
  return data;
};

export const usePostResumeCerification: UsePostResumeCertificationProps = () =>
  useMutation<PostResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeCerification,
  });
