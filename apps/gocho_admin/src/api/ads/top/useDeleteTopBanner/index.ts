import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteTopBannerDef, RequestObjDef, useDeleteTopBannerProps } from "./type";

export const deleteBanner: DeleteTopBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/ads/jd-top/${requestObj.bannerId}`);
  return data;
};

export const useDeleteTopBanner: useDeleteTopBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteBanner });
