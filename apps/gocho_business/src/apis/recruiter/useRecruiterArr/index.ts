import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ErrorResponseDef } from "@/types";

import { axiosInstance } from "../../useIsRefreshLock";
import { recruiterArrKeyObj, GetRecruiterArrDef, ResponseObjDef } from "./type";
import { recruiterArrSelector } from "./util";

export const getRecruiterArr: GetRecruiterArrDef = async () => {
  const { data } = await axiosInstance.get("/managers");
  return data;
};

export const useRecruiterArr = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof recruiterArrSelector>>({
    queryKey: recruiterArrKeyObj.all,
    queryFn: getRecruiterArr,
    select: (data) => recruiterArrSelector(data),
  });
