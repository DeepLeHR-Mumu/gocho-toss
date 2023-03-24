import { useQuery } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "@api/useAxiosInterceptor";

import { GetJdArrDef, jdArrKeyObj, RequestObjDef } from "./type";
import { jdArrSelector } from "./util";

export const getJdArr: GetJdArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosNoTokenInstance.get("/jds", { params: requestObj });
  return data;
};

export const useJdArr = (requestObj: RequestObjDef) => {
  return useQuery({
    queryKey: jdArrKeyObj.arr(requestObj),
    queryFn: getJdArr,
    select: (data) => {
      return jdArrSelector(data);
    },
  });
};
