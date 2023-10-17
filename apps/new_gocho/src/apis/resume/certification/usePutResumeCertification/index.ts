import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";

import { axiosInstance } from "@/apis/axiosInstance";
import {
  PutResumeCertificationDef,
  PutResumeCertificationResponse,
  RequestObjDef,
  UsePutResumeCertificationProps,
} from "./type";

export const putResumeCertification: PutResumeCertificationDef = async ({
  resumeId,
  certificationId,
  ...requestObj
}) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/certifications/${certificationId}`, { ...requestObj });
  return data;
};

export const usePutResumeCertification: UsePutResumeCertificationProps = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation<PutResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeCertification,
    onSuccess: () => {
      queryClient.invalidateQueries(resumeCertificationKeyObj.certificationArr(resumeId));
    },
  });
};
