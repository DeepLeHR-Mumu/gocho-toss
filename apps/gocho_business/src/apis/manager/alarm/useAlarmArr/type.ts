import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  managerId?: number;
  size?: number;
  page?: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    category: string;
    description: string;
    link: string;
    is_read: number;
    created_time: string;
    updated_time: string | null;
  }[];
  page_result: PageResultDef;
}

export const alarmArrKeyObj = {
  all: [{ data: "alarmArr" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "alarmArr", requestObj }] as const,
};

export interface GetAlarmArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof alarmArrKeyObj.arr>>): Promise<ResponseObjDef>;
}
