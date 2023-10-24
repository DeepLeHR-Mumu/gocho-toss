import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";
import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import { PutResumeExtraDef, PutResumeExtraResponse, RequestObjDef, UsePutResumeExtraProps } from "./type";

export const putResumeExtra: PutResumeExtraDef = async ({ resumeId, extraId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/educations/extras/${extraId}`, { ...requestObj });
  return data;
};

export const usePutResumeExtra: UsePutResumeExtraProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeExtraResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeExtra,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeEducationKeyObj.educationArr(resumeId));
    },
  });
};
