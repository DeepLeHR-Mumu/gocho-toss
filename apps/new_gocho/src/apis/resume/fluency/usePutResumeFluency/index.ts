import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "@/apis/axiosInstance";

import { PutResumeFluencyResponse, UsePutResumeFluencyProps, RequestObjDef, PutResumeFluencyDef } from "./type";

export const putResumeFluency: PutResumeFluencyDef = async ({ resumeId, fluencyId, ...requestObj }) => {
  const { data } = await axiosInstance.put(`/resumes/${resumeId}/fluencies/${fluencyId}`, { ...requestObj });
  return data;
};

export const usePutResumeFluency: UsePutResumeFluencyProps = () =>
  useMutation<PutResumeFluencyResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: putResumeFluency,
  });
