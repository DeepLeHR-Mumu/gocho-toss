import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../../axiosInstance";

import { RequestObjDef } from "./type";

const addPostingViewCount = async (requestObj: RequestObjDef) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(`/users/postings/${requestObj.elemId}/views`, null, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useAddPostingViewCount = () => {
  const mutationResult = useMutation({ mutationFn: addPostingViewCount });
  return mutationResult;
};
