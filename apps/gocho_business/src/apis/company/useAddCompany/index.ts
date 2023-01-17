import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";
import { axiosInstance } from "@/apis/useIsRefreshLock";

import { companyDetailKeyObj, PutCompanyDetailDef, RequestObjDef, useCompanyDetailProps } from "./type";

export const putCompanyDetail: PutCompanyDetailDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);

  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddCompanyDetail: useCompanyDetailProps = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(
    (requestObj) => putCompanyDetail(requestObj),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(companyDetailKeyObj.all);
      },
    }
  );
};
