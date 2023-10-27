import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { EditRecruiterDef, RequestObjDef, UseEditRecruiterProps } from "./type";

const patchEditRecruiter: EditRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/managers/${requestObj.managerId}`, {
    origin_password: requestObj.origin_password,
    new_password: requestObj.new_password,
  });
  return data;
};

export const useEditRecruiter: UseEditRecruiterProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: patchEditRecruiter });
