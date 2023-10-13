import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import {
  PutResumeUniversityDef,
  PutResumeUniversityResponse,
  RequestObjDef,
  UsePutResumeUniversityProps,
} from "./type";

export const putResumeUniversity: PutResumeUniversityDef = async ({ resumeId, universityId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/educations/universities/${universityId}`, {
    ...requestObj,
  });
  return data;
};

export const usePutResumeUniversity: UsePutResumeUniversityProps = () =>
  useMutation<PutResumeUniversityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeUniversity,
  });
