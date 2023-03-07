import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostDeleteMySpecDef, useDeleteMySpecProps, RequestObjDef } from "./type";

const postDeleteMySpec: PostDeleteMySpecDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.delete(`/specs/${requestObj?.id}`, {
    headers: {
      "x-access-token": token,
    },
  });

  return data;
};

export const useDeleteMySpec: useDeleteMySpecProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postDeleteMySpec });
  return mutationResult;
};
