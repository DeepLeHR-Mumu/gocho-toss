import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteRecruiterDef, RequestObjDef, useDeleteRecruiterProps } from "./type";

export const deleteRecruiter: DeleteRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/managers/${requestObj.managerId}`);
  return data;
};

export const useDeleteRecruiter: useDeleteRecruiterProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteRecruiter });
