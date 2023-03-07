import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { PostJdApplyClickDef, RequestObjDef } from "./type";

const postJdApplyClick: PostJdApplyClickDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post(`jds/${requestObj.id}/clicks`, null, {
    headers: {
      "x-access-token": token,
    },
  });

  return data;
};

export const useJdApplyClick = () => {
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postJdApplyClick });
};
