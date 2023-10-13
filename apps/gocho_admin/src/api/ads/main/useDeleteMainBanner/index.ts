import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteMainBannerDef, RequestObjDef, useDeleteMainBannerProps } from "./type";

export const deleteBanner: DeleteMainBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/ads/main-banner/${requestObj.bannerId}`);
  return data;
};

export const useDeleteMainBanner: useDeleteMainBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteBanner });
