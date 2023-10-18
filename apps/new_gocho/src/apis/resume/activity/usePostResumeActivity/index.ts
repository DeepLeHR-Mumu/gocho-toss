import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import { PostResumeActivityDef, PostResumeActivityResponse, RequestObjDef, UsePostResumeActivityProps } from "./type";
import { resumeActivityKeyObj } from "@/constants/queryKeyFactory/resume/resumeActivityKeyObj";

const postResumeActivity: PostResumeActivityDef = async ({ resumeId, ...requestObj }) => {
  const { data } = await axiosInstance.post(`/resumes/${resumeId}/activities`, requestObj);
  return data;
};

export const usePostResumeActivity: UsePostResumeActivityProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PostResumeActivityResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: postResumeActivity,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeActivityKeyObj.activityArr(resumeId));
    },
  });
};
