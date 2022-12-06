import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { PostBannerDef, useUploadBannerProps, PostBannerResponseDef, RequestObjDef } from "./type";

export const postBanner: PostBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/upload/banner", requestObj, {
    // headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useUploadBanner: useUploadBannerProps = () => {
  const mutationResult = useMutation<PostBannerResponseDef, AxiosError, RequestObjDef>(postBanner);
  return mutationResult;
};
