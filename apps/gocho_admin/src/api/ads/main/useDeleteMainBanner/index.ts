import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteMainBannerDef, RequestObjDef, useDeleteMainBannerProps } from "./type";

export const deleteBanner: DeleteMainBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/ads/main-banner/${requestObj.bannerId}`);
  return data;
};

export const useDeleteMainBanner: useDeleteMainBannerProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteBanner });
