import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "@/types";
import { axiosInstance } from "@/api/useAxiosInterceptor";

import { MoveBannerDef, RequestObjDef, UseMoveBannerProps } from "./type";

const patchMoveBanner: MoveBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(
    `/ads/jd-banner/move?from=${requestObj.from}&to=${requestObj.to}&type=${requestObj.type}`
  );
  return data;
};

export const useMoveJdBanner: UseMoveBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: patchMoveBanner });
