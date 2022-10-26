import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { useDeleteJobProps, DeleteJobDef, RequestObjDef } from "./type";

export const deleteJob: DeleteJobDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/admin/jds/${requestObj.jdId}`);
  return data;
};

export const useDeleteJob: useDeleteJobProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteJob);
  return mutationResult;
};
