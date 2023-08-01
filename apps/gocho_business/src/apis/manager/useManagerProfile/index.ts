import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../axiosInstance";
import { GetManagerProfileDef, managerProfileKeyObj, ResponseObjDef } from "./type";
import { managerProfileSelector } from "./util";

export const getManagerProfile: GetManagerProfileDef = async () => {
  const { data } = await axiosInstance.get("/managers/profile");
  return data;
};

export const useManagerProfile = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof managerProfileSelector>>({
    queryKey: managerProfileKeyObj.all,
    queryFn: getManagerProfile,
    select: (data) => managerProfileSelector(data),
  });
