import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";
import { companyDetailKeyObj, PutCompanyDetailDef, RequestObjDef, useCompanyDetailProps } from "./type";

export const putCompanyDetail: PutCompanyDetailDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));
  if (requestObj.logo) formData.append("logo", requestObj.logo);
  if (requestObj.bgImage) formData.append("backgroundImage", requestObj.bgImage);

  const { data } = await axiosInstance.put(`/companies/${requestObj.companyId}`, formData);
  return data;
};

export const useAddCompanyDetail: useCompanyDetailProps = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: (requestObj) => putCompanyDetail(requestObj),
    onSuccess: () => {
      queryClient.invalidateQueries(companyDetailKeyObj.all);
    },
  });
};
