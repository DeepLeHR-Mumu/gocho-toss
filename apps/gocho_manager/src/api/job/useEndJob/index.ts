import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { useEndJobProps, EndJobDef, RequestObjDef } from "./type";

export const endJob: EndJobDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(`/jds/cut/${requestObj.jdId}`);
  return data;
};

export const useEndJob: useEndJobProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(endJob);
  return mutationResult;
};
