import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";
import { PostLogoDef, useUploadLogoProps, PostLogoResponseDef, RequestObjDef } from "./type";

export const postLogo: PostLogoDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/upload/logo", requestObj.logo, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useUploadLogo: useUploadLogoProps = () => {
  const mutationResult = useMutation<PostLogoResponseDef, AxiosError, RequestObjDef>(postLogo);
  return mutationResult;
};
