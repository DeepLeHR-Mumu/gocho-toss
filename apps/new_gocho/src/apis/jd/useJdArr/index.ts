import { useQuery } from "@tanstack/react-query";

import { jdArrKeyObj, JdArrRequestObjDef } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { GetJdArrDef } from "./type";
import { selector } from "./util";

export const getJdArr: GetJdArrDef = async ({ queryKey: [{ requestObj }] }) => {
  const { data } = await axiosInstance.get("/jds", { params: { ...requestObj, enable: undefined } });
  return data;
};

export const useJdArr = (requestObj: JdArrRequestObjDef) => {
  return useQuery({
    queryKey: jdArrKeyObj.jdArr(requestObj),
    queryFn: getJdArr,
    select: ({ data, page_result }) => {
      return selector(data, page_result);
    },
    enabled: requestObj.enable,
  });
};
