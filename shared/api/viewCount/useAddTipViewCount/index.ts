import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addTipViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(`/tips/${requestObj.elemId}/views`, null, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useAddTipViewCount = () => {
  const mutationResult = useMutation(addTipViewCount);
  return mutationResult;
};
