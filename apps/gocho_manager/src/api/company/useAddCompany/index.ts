import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostCompanyDef, useAddCompanyProps, RequestObjDef } from "./type";

export const postCompany: PostCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/admin/companies", requestObj);
  return data;
};

export const useAddCompany: useAddCompanyProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postCompany);
  return mutationResult;
};
