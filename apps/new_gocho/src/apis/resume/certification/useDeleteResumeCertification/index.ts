import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";

import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeCertificationDef, RequestObjDef, UseDeleteResumeCertificationProps } from "./type";

export const deleteResumeCertification: DeleteResumeCertificationDef = async ({ resumeId, certificationId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/certifications/${certificationId}`);
  return data;
};

export const useDeleteResumeCertification: UseDeleteResumeCertificationProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeCertification,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeCertificationKeyObj.certificationArr(resumeId));
    },
  });
};
