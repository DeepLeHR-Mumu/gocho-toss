import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostMainBannerDef, RequestObjDef, useAddMainBannerProps } from "./type";

export const postAddMainBanner: PostMainBannerDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));
  formData.append("pcImage", requestObj.pcImage);
  formData.append("mobileImage", requestObj.mobileImage);

  const { data } = await axiosInstance.post("/ads/main-banner", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddMainBanner: useAddMainBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddMainBanner });
