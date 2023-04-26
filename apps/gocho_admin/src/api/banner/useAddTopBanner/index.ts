import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostTopBannerDef, RequestObjDef, useAddTopBannerProps } from "./type";

export const postAddTopBanner: PostTopBannerDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);

  const { data } = await axiosInstance.post("/banners/top", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddTopBanner: useAddTopBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddTopBanner });
