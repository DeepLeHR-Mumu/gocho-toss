import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostSideBannerDef, RequestObjDef, useAddSideBannerProps } from "./type";

export const postAddSideBanner: PostSideBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/banners/side", requestObj);
  return data;
};

export const useAddSideBanner: useAddSideBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddSideBanner });
