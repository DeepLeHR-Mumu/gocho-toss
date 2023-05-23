import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { MoveBannerDef, RequestObjDef, UseMoveBannerProps } from "./type";

const patchMoveBanner: MoveBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(
    `/ads/main-banner/move?from=${requestObj.from}&to=${requestObj.to}&type=${requestObj.type}`
  );
  return data;
};

export const useMoveMainBanner: UseMoveBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchMoveBanner });
