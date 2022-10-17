import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addCompanyViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(`/companies/${requestObj.elemId}/views`, null, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useAddCompanyViewCount = () => {
  const mutationResult = useMutation(addCompanyViewCount,);
  
  return mutationResult;
};
