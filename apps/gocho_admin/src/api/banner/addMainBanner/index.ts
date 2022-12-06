import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostMainBannerDef, useAddMainBannerProps, RequestObjDef } from "./type";

export const postMainBanner: PostMainBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/banners/main", requestObj, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddMainBanner: useAddMainBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postMainBanner);
  return mutationResult;
};
