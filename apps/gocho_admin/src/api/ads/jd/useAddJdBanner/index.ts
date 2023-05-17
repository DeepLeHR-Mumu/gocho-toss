import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostJdBannerDef, RequestObjDef, useAddJdBannerProps } from "./type";

export const postAddJdBanner: PostJdBannerDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);
  formData.append("image", requestObj.image);

  const { data } = await axiosInstance.post("/ads/jd-banner", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddJdBanner: useAddJdBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddJdBanner });
