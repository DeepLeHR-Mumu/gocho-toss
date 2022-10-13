import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostCompanyDef, useAddCompanyProps, RequestObjDef } from "./type";

export const postCompany: PostCompanyDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post("/admin/companies", requestObj, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useAddCompany: useAddCompanyProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postCompany);
  return mutationResult;
};
