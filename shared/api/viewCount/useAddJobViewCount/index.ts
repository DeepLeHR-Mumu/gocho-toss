import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef, AddJdViewCountDef, UseAddJdViewCountProps } from "./type";

const addJobViewCount: AddJdViewCountDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/jds/${requestObj.jobId}/views`, null);
  return data;
};

export const useAddJobViewCount: UseAddJdViewCountProps = () => {
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: addJobViewCount });
};
