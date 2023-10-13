import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { DeleteJdBannerDef, RequestObjDef, useDeleteJdBannerProps } from "./type";

export const deleteBanner: DeleteJdBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/ads/jd-banner/${requestObj.bannerId}`);
  return data;
};

export const useDeleteJdBanner: useDeleteJdBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: deleteBanner });
