import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/axiosInstance";

import { ReportUserDef, RequestObjDef } from "./type";

const postReportUser: ReportUserDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/users/${requestObj.userId}/report`, { reason: requestObj.reason });
  return data;
};

export const useReportUser = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postReportUser,
  });
