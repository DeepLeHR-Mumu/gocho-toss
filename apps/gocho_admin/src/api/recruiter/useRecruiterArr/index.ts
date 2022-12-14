import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@api/axiosInstance";

import { recruiterArrKeyObj } from "../keyFactory";
import { GetRecruiterArrDef } from "./type";
import { selector } from "./util";

export const getRecruiterArr: GetRecruiterArrDef = async () => {
  const { data } = await axiosInstance.get(`/managers`);
  return data;
};

export const useRecruiterArr = () => {
  return useQuery(recruiterArrKeyObj.arr(), getRecruiterArr, {
    select: ({ data, count }) => {
      return selector(data, count);
    },
  });
};
