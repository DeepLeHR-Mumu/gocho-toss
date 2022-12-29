import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types/errorType";

import { factoryArrKeyObj, GetRecruiterArrDef, ResponseObjDef } from "./type";
import { recruiterArrSelector } from "./util";

export const getRecruiterArr: GetRecruiterArrDef = async () => {
  const { data } = await axiosInstance.get("/managers");
  return data;
};

export const useRecruiterArr = () =>
  useQuery<ResponseObjDef, AxiosError<ErrorResponseDef>, ReturnType<typeof recruiterArrSelector>>(
    factoryArrKeyObj.all,
    getRecruiterArr,
    {
      select: (data) => recruiterArrSelector(data),
    }
  );
