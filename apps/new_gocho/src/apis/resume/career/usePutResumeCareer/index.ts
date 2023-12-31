import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import { PutResumeCareerDef, PutResumeCareerResponse, RequestObjDef, UsePostResumeCareerProps } from "./type";

export const putResumeCareer: PutResumeCareerDef = async ({ resumeId, careerId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/careers/${careerId}`, { ...requestObj });
  return data;
};

export const usePutResumeCareer: UsePostResumeCareerProps = () =>
  useMutation<PutResumeCareerResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeCareer,
  });
