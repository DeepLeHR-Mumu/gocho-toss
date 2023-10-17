import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import { PutResumeActivityDef, PutResumeActivityResponse, RequestObjDef, UsePutResumeActivityProps } from "./type";

export const putResumeActivity: PutResumeActivityDef = async ({ resumeId, activityId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/activities/${activityId}`, requestObj);
  return data;
};

export const usePutResumeActivity: UsePutResumeActivityProps = () =>
  useMutation<PutResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeActivity,
  });
