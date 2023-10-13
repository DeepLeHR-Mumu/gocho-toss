import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeActivityDef, RequestObjDef, UseDeleteResumeActivityProps } from "./type";

export const deleteResumeActivity: DeleteResumeActivityDef = async ({ resumeId, activityId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/activities/${activityId}`);
  return data;
};

// TODO: 삭제된 후 로직 생각하기
export const useDeleteResumeActivity: UseDeleteResumeActivityProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeActivity,
  });
