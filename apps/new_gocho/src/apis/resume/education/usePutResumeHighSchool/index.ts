import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import {
  PutResumeHighSchoolDef,
  PutResumeHighSchoolResponse,
  RequestObjDef,
  UsePutResumeHighSchoolProps,
} from "./type";

export const putResumeHighSchool: PutResumeHighSchoolDef = async ({ resumeId, highschoolId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/educations/highschools/${highschoolId}`, {
    ...requestObj,
  });
  return data;
};

export const usePutResumeHighSchool: UsePutResumeHighSchoolProps = () =>
  useMutation<PutResumeHighSchoolResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeHighSchool,
  });
