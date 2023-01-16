import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "@/types/errorType";

import { axiosInstance } from "../../useIsRefreshLock";
import { RequestObjDef, EndJdDef } from "./type";

export const patchJd: EndJdDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/${requestObj.jdId}`);
  return data;
};

export const useEndJd = () => useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>(patchJd);