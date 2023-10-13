import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostTopBannerDef, RequestObjDef, useAddTopBannerProps } from "./type";

export const postAddTopBanner: PostTopBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/ads/jd-top", requestObj);
  return data;
};

export const useAddTopBanner: useAddTopBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddTopBanner });
