import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { PostCompanyDef, RequestObjDef, useAddCompanyProps } from "./type";

export const postAddCompany: PostCompanyDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/companies", requestObj, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddCompany: useAddCompanyProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postAddCompany);
};
