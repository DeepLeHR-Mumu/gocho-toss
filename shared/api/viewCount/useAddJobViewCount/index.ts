import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addJobViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(`/jds/${requestObj.elemId}/views`, null, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useAddJobViewCount = () => {
  const mutationResult = useMutation({ mutationFn: addJobViewCount });
  return mutationResult;
};
