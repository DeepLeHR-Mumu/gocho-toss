import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../axiosInstance";
import { factoryArrKeyObj, GetFactoryArrDef, RequestObjDef, ResponseObjDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { page, size } = requestObj;
  let url = "/factories?";

  if (page) {
    url += `page=${page}`;
  }

  if (size) {
    url += `size=${size}`;
  }

  if (url.split("?")[1].length === 0) {
    url = "/factories";
  }

  const { data } = await axiosInstance.get(url);
  return data;
};

export const useFactoryArr = (requestObj?: RequestObjDef) =>
  useQuery<
    ResponseObjDef,
    AxiosError<ErrorResponseDef>,
    ReturnType<typeof factoryArrSelector>,
    ReturnType<typeof factoryArrKeyObj.detail>
  >({
    queryKey: factoryArrKeyObj.detail(requestObj !== undefined ? requestObj : {}),
    queryFn: getFactoryArr,
    select: (data) => factoryArrSelector(data),
  });
