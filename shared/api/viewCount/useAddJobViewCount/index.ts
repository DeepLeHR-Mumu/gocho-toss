import { useMutation } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addJobViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosNoTokenInstance.post(`/jds/${requestObj.jobId}/views`, null, { headers });
  return data;
};

export const useAddJobViewCount = () => {
  return useMutation({ mutationFn: addJobViewCount });
};
