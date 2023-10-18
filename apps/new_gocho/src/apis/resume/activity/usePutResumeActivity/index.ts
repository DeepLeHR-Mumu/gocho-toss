import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeActivityKeyObj } from "@/constants/queryKeyFactory/resume/resumeActivityKeyObj";

import { PutResumeActivityDef, PutResumeActivityResponse, RequestObjDef, UsePutResumeActivityProps } from "./type";

export const putResumeActivity: PutResumeActivityDef = async ({ resumeId, activityId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/activities/${activityId}`, requestObj);
  return data;
};

export const usePutResumeActivity: UsePutResumeActivityProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeActivity,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeActivityKeyObj.activityArr(resumeId));
    },
  });
};
