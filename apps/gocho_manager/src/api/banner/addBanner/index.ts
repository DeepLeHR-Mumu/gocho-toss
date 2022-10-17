import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostBannerDef, useAddBannerProps, RequestObjDef } from "./type";

export const postBanner: PostBannerDef = async (requestObj) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkluZm8iLCJpZCI6MSwiZW1haWwiOiJhZG1pbkBkZWVwbGVoci5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY2NTExOTI3MywiZXhwIjoxNjY2MzI4ODczLCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.IMWOWTv33ARYK9xw-_QHU4s4B_GUVcQtnA3xeqwQdIdNuDhULXTcb304ACoUV92ys0yfe8brbOj-XxQy30CBDw";
  const { data } = await axiosInstance.post("/admin/banners", requestObj, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useAddBanner: useAddBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postBanner);
  return mutationResult;
};
