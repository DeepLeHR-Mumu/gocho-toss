import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { resumeFluencyKeyObj } from "@/constants/queryKeyFactory/resume/resumeFluencyKeyObj";
import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeFluencyDef, RequestObjDef, UseDeleteResumeFluencyProps } from "./type";

export const deleteResumeFluency: DeleteResumeFluencyDef = async ({ resumeId, fluencyId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/fluencies/${fluencyId}`);

  return data;
};

export const useDeleteResumeFluency: UseDeleteResumeFluencyProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeFluency,

    onSuccess: () => {
      queryClient.invalidateQueries(resumeFluencyKeyObj.fluencyArr(resumeId));
    },
  });
};
