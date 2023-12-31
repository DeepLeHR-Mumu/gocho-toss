import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/useAxiosInterceptor";

import { GetRecruiterArrDef, recruiterArrKeyObj } from "./type";
import { recruiterArrSelector } from "./util";

export const getRecruiterArr: GetRecruiterArrDef = async () => {
  const { data } = await axiosInstance.get(`/managers`);
  return data;
};

export const useRecruiterArr = () =>
  useQuery({
    queryKey: recruiterArrKeyObj.arr(),
    queryFn: getRecruiterArr,
    select: (data) => recruiterArrSelector(data),
  });
