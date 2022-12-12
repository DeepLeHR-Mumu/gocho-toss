import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostSideBannerDef, useAddSideBannerProps, RequestObjDef } from "./type";

export const postSideBanner: PostSideBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/banners/side", requestObj);
  return data;
};

export const useAddSideBanner: useAddSideBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postSideBanner);
  return mutationResult;
};