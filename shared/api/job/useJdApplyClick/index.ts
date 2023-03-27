import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { PostJdApplyClickDef, RequestObjDef } from "./type";

const postJdApplyClick: PostJdApplyClickDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post(`jds/${requestObj.id}/clicks`, null, { headers });

  return data;
};

export const useJdApplyClick = () => {
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postJdApplyClick });
};
