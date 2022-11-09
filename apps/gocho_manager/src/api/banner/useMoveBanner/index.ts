import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "@api/axiosInstance";

import { UseMoveBannerProps, MoveBannerDef, RequestObjDef } from "./type";

const MoveBanner: MoveBannerDef = async (requestObj) => {
  const { data } = await axiosInstance.patch(
    `/banners/move?from=${requestObj.from}&to=${requestObj.to}&type=${requestObj.type}`
  );
  return data;
};

export const useMoveBanner: UseMoveBannerProps = () => {
  const mutationResult = useMutation<AdminResponseDef, AxiosError, RequestObjDef>(MoveBanner);
  return mutationResult;
};
