import { useMutation } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addJobViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosNoTokenInstance.post(`/users/jds/${requestObj.elemId}/views`, null, { headers });
  return data;
};

export const useAddJobViewCount = () => {
  return useMutation({ mutationFn: addJobViewCount });
};
