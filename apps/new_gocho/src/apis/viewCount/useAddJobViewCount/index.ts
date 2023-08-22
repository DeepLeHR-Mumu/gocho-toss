import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { ErrorResponseDef } from "shared-type/api/errorResponseType";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef, AddJdViewCountDef, UseAddJdViewCountProps } from "./type";

const addJdViewCount: AddJdViewCountDef = async (requestObj) => {
  const { data } = await axiosInstance.post(`/jds/${requestObj.jdId}/views`, null);
  return data;
};

export const useAddJdViewCount: UseAddJdViewCountProps = () => {
  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({ mutationFn: addJdViewCount });
};
