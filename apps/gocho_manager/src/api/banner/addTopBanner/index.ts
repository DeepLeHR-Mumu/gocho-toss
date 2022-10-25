import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";
import { PostTopBannerDef, useAddTopBannerProps, RequestObjDef } from "./type";

export const postTopBanner: PostTopBannerDef = async (requestObj) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkluZm8iLCJpZCI6MSwiZW1haWwiOiJhZG1pbkBkZWVwbGVoci5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY2NjI1NTAxOCwiZXhwIjoxNjY3NDY0NjE4LCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.MCFcFa8nuSC_uYgu35U8-rmN5bG5IGHbA2CjXjMwM94sJ5GPwX6sHE49ObLzPb9jtrMAC4xLYdvSe5CIe_FP_g";
  const { data } = await axiosInstance.post("/admin/banners/top", requestObj.dto, {
    headers: { "x-access-token": token, "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const useAddTopBanner: useAddTopBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postTopBanner);
  return mutationResult;
};
