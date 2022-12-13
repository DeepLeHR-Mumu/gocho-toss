import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { useDeleteCompanyProps, DeleteCompanyDef, RequestObjDef } from "./type";

export const deleteCompany: DeleteCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/companies/${requestObj.companyId}`);
  return data;
};

export const useDeleteCompany: useDeleteCompanyProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteCompany);
  return mutationResult;
};
