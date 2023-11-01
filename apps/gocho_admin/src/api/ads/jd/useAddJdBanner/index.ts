import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostJdBannerDef, RequestObjDef, useAddJdBannerProps } from "./type";

export const postAddJdBanner: PostJdBannerDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));
  formData.append("pcImage", requestObj.pcImage);
  formData.append("mobileImage", requestObj.mobileImage);

  const { data } = await axiosInstance.post("/banners/jd-banner", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddJdBanner: useAddJdBannerProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAddJdBanner });
