import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api";

import { axiosInstance } from "@/apis/axiosInstance";

import { DeleteResumeCertificationDef, RequestObjDef, UseDeleteResumeCertificationProps } from "./type";

export const deleteResumeCertification: DeleteResumeCertificationDef = async ({ resumeId, certificationId }) => {
  const { data } = await axiosInstance.delete(`/resumes/${resumeId}/certifications/${certificationId}`);
  return data;
};

// TODO: 삭제된 후 로직 생각하기
export const useDeleteResumeCertification: UseDeleteResumeCertificationProps = () =>
  useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: deleteResumeCertification,
  });
