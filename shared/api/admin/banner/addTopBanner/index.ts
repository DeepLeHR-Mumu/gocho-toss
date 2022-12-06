import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostTopBannerDef, useAddTopBannerProps, RequestObjDef } from "./type";

export const postTopBanner: PostTopBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/banners/top", requestObj, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddTopBanner: useAddTopBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postTopBanner);
  return mutationResult;
};
