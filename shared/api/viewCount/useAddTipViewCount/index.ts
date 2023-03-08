import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addTipViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(`/users/tips/${requestObj.elemId}/views`, null, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useAddTipViewCount = () => {
  const mutationResult = useMutation({ mutationFn: addTipViewCount });
  return mutationResult;
};
