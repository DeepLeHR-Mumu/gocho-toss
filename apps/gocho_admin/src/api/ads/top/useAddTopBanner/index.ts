import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostTopBannerDef, RequestObjDef, useAddTopBannerProps } from "./type";

export const postAddTopBanner: PostTopBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/ads/jd-top", requestObj);
  return data;
};

export const useAddTopBanner: useAddTopBannerProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: postAddTopBanner });
