import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosNoTokenInstance } from "../../axiosInstance";
import { companyArrFindKeyObj, GetCompanyArrDef, RequestObjDef, ResponseObjDef } from "./type";
import { companyArrSelector } from "./util";

export const getFindCompany: GetCompanyArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get(`/companies/find/name`, {
    params: requestObj,
  });
  return data;
};

export const useFindCompany = (requestObj: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof companyArrSelector>,
    ReturnType<typeof companyArrFindKeyObj.find>
  >({
    queryKey: companyArrFindKeyObj.find(requestObj),
    queryFn: getFindCompany,
    select: (data) => companyArrSelector(data),
  });
