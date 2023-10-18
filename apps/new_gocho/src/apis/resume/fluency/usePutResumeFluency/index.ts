import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { resumeFluencyKeyObj } from "@/constants/queryKeyFactory/resume/resumeFluencyKeyObj";
import { axiosInstance } from "@/apis/axiosInstance";

import { PutResumeFluencyResponse, UsePutResumeFluencyProps, RequestObjDef, PutResumeFluencyDef } from "./type";

export const putResumeFluency: PutResumeFluencyDef = async ({ resumeId, fluencyId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/fluencies/${fluencyId}`, { ...requestObj });
  return data;
};

export const usePutResumeFluency: UsePutResumeFluencyProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeFluencyResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeFluency,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeFluencyKeyObj.fluencyArr(resumeId));
    },
  });
};
