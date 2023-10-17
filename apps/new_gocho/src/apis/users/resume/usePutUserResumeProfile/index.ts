import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { resumeArrKeyObj } from "@/constants/queryKeyFactory/user/resumeArrKeyObj";

import { axiosInstance } from "@/apis/axiosInstance";

import { PutUserResumeProfile, RequestObjDef, UserPutUserResumeProfile } from "./type";

export const putUserResumeProfile: PutUserResumeProfile = async ({ userId, image, requestObj }) => {
  const formData = new FormData();
  if (requestObj) formData.append("json", JSON.stringify({ ...requestObj }));
  if (image) formData.append("image", image as File);

  const { data } = await axiosInstance.put(`/users/${userId}/resume-profile`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const usePutUserResumeProfile: UserPutUserResumeProfile = (userId) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putUserResumeProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeArrKeyObj.resumeArr(userId));
      queryClient.invalidateQueries(resumeArrKeyObj.resumeProfile({ userId }));
    },
  });
};
