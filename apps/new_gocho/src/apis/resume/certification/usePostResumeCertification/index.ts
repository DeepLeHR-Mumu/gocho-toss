import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";

import { axiosInstance } from "@/apis/axiosInstance";

import {
  PostResumeCertificationDef,
  PostResumeCertificationResponse,
  RequestObjDef,
  UsePostResumeCertificationProps,
} from "./type";

export const postResumeCertification: PostResumeCertificationDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/certifications`, requestObj);
  return data;
};

export const usePostResumeCertification: UsePostResumeCertificationProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PostResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeCertification,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeCertificationKeyObj.certificationArr(resumeId));
    },
  });
};
