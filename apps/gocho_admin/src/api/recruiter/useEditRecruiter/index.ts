import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { EditRecruiterDef, RequestObjDef, UseEditRecruiterProps } from "./type";

const patchEditRecruiter: EditRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/managers/${requestObj.managerId}`, {
    origin_password: requestObj.origin_password,
    new_password: requestObj.new_password,
  });
  return data;
};

export const useEditRecruiter: UseEditRecruiterProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(patchEditRecruiter);
};