import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeActivityKeyObj } from "@/constants/queryKeyFactory/resume/resumeActivityKeyObj";

import { DeleteResumeActivityDef, RequestObjDef, UseDeleteResumeActivityProps } from "./type";

export const deleteResumeActivity: DeleteResumeActivityDef = async ({ resumeId, activityId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/activities/${activityId}`);
  return data;
};

export const useDeleteResumeActivity: UseDeleteResumeActivityProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeActivity,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeActivityKeyObj.activityArr(resumeId));
    },
  });
};
