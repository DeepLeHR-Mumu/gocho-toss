import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/useAxiosInterceptor";

import { DeleteBannerDef, RequestObjDef, useDeleteBannerProps } from "./type";

export const deleteBanner: DeleteBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/banners/${requestObj.bannerId}`);
  return data;
};

export const useDeleteBanner: useDeleteBannerProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteBanner);
};
