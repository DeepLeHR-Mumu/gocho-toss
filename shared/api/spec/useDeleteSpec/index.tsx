import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDeleteMySpecDef, RequestObjDef, useDeleteMySpecProps } from "./type";

const postDeleteMySpec: PostDeleteMySpecDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.delete(`/specs/${requestObj?.id}`, { headers });

  return data;
};

export const useDeleteMySpec: useDeleteMySpecProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDeleteMySpec });
};
