import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { useDeleteBannerProps, DeleteBannerDef, RequestObjDef } from "./type";

export const deleteBanner: DeleteBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.delete(`/banners/${requestObj.bannerId}`);
  return data;
};

export const useDeleteBanner: useDeleteBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(deleteBanner);
  return mutationResult;
};
