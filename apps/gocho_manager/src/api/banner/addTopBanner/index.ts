import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostTopBannerDef, useAddTopBannerProps, RequestObjDef } from "./type";

export const postTopBanner: PostTopBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/admin/banners/top", requestObj.dto, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddTopBanner: useAddTopBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postTopBanner);
  return mutationResult;
};
