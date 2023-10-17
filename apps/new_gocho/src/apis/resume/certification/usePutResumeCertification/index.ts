import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api";

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

export const usePutResumeCertification: UsePutResumeCertificationProps = () =>
  useMutation<PutResumeCertificationResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeCertification,
  });
