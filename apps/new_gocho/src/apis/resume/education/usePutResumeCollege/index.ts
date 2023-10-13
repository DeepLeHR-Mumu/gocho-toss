import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import { PutResumeCollegeDef, PutResumeCollegeResponse, RequestObjDef, UsePutResumeCollegeProps } from "./type";

export const putResumeCollege: PutResumeCollegeDef = async ({ resumeId, collegeId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/educations/colleges/${collegeId}`, { ...requestObj });
  return data;
};

export const usePutResumeCollege: UsePutResumeCollegeProps = () =>
  useMutation<PutResumeCollegeResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeCollege,
  });
