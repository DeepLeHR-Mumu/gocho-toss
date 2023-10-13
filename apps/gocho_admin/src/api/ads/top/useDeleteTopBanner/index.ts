import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteTopBannerDef, RequestObjDef, useDeleteTopBannerProps } from "./type";

export const deleteBanner: DeleteTopBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/ads/jd-top/${requestObj.bannerId}`);
  return data;
};

export const useDeleteTopBanner: useDeleteTopBannerProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteBanner });
