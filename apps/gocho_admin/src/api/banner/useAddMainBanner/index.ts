import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { PostMainBannerDef, RequestObjDef, useAddMainBannerProps } from "./type";

export const postAddMainBanner: PostMainBannerDef = async (requestObj) => {
  const formData = new FormData();
  formData.append("json", JSON.stringify(requestObj.dto));
  formData.append("image", requestObj.image);

  const { data } = await axiosInstance.post("/banners/main", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddMainBanner: useAddMainBannerProps = () =>
  useMutation<AdminResponseDef, AxiosError, RequestObjDef>({ mutationFn: postAddMainBanner });
