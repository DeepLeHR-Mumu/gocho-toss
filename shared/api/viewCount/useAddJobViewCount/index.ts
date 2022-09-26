import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addJobViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(`/jds/${requestObj.elemId}/views`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useAddCompanyViewCount = () => {
  const mutationResult = useMutation(addJobViewCount);
  return mutationResult;
};
