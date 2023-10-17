import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteJdBannerDef, RequestObjDef, useDeleteJdBannerProps } from "./type";

export const deleteBanner: DeleteJdBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/ads/jd-banner/${requestObj.bannerId}`);
  return data;
};

export const useDeleteJdBanner: useDeleteJdBannerProps = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({ mutationFn: deleteBanner });
