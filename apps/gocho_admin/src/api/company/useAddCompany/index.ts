import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostCompanyDef, useAddCompanyProps, RequestObjDef } from "./type";

export const postCompany: PostCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/companies", requestObj, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddCompany: useAddCompanyProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postCompany);
  return mutationResult;
};
