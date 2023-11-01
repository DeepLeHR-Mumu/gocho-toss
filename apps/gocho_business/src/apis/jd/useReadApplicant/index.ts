import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";

import { PatchReadApplicantDef } from "./type";

export const patchReadApplicant: PatchReadApplicantDef = async ({ jdId, applicantIdArr }) => {
  const response = await axiosInstance.patch(
    `/jds/${jdId}/applicants/read${
      applicantIdArr && applicantIdArr.length !== 0 ? `?applicantIds=${applicantIdArr.join(",")}` : ""
    }`
  );
  return response;
};

export const useReadApplicant = () =>
  useMutation<AxiosResponse, AxiosError, { jdId: number; applicantIdArr: number[] }>(patchReadApplicant);
