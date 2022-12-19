import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/api/axiosInteceptor";

import { factoryArrKeyObj, GetFactoryArrDef } from "./type";
import { factoryArrSelector } from "./util";

export const getFactoryArr: GetFactoryArrDef = async () => {
  const { data } = await axiosInstance.get("/factories", {
    headers: {
      "x-access-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VySW5mbyIsImlkIjowLCJjb21wYW55X2lkIjoxMDI3LCJjb21wYW55X25hbWUiOiLqs6DstIjrjIDsobjri7fsu7QiLCJlbWFpbCI6InRlZW1vQGRlZXBsZWhyLmNvbSIsIm5hbWUiOiLti7DrqqgiLCJkZXBhcnRtZW50Ijoi6rCc67Cc7YyAIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsInR5cGUiOjIsImlhdCI6MTY3MDk5OTIyNCwiZXhwIjoxNjcyMjA4ODI0LCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.fQV2TMhgzRwC3nfrjDU0YxJIBL27FeGA5_Z5ABuGlk2db4jTTfsCSJEs6f3-SwBRMmOtMxYVCVBCUl2FQTG3gg",
    },
  });
  return data;
};

export const useFactoryArr = () =>
  useQuery(factoryArrKeyObj.arr, getFactoryArr, {
    select: (data) => factoryArrSelector(data),
  });
