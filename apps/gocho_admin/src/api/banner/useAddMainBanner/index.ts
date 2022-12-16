import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "@api/axiosInstance";

import { PostMainBannerDef, RequestObjDef, useAddMainBannerProps } from "./type";

export const postAddMainBanner: PostMainBannerDef = async (requestObj) => {
  const formData = new FormData();
  const json = JSON.stringify(requestObj.dto);
  const blob = new Blob([json], { type: "application/json" });
  formData.append("dto", blob);
  formData.append("image", requestObj.image);

  const { data } = await axiosInstance.post("/banners/main", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddMainBanner: useAddMainBannerProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postAddMainBanner);
};
