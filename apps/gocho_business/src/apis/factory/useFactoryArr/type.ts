import { QueryFunctionContext } from "@tanstack/react-query";

import { PageResultDef } from "shared-type/api/paginationType";

export interface RequestObjDef {
  page?: number;
  size?: number;
}

export interface ResponseObjDef {
  data:
    | {
        id: number;
        status: { name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려"; reason: null | "string" };
        uploader: { name: string; department: string; is_mine: boolean };
        name: string;
        address: string;
        male_number: number;
        female_number: number;
        product: string;
        bus: {
          exists: boolean;
          desc: string | null;
        };
        dormitory: {
          exists: boolean;
          desc: string | null;
        };
        created_time: string;
        updated_time: string | null;
      }[]
    | [];
  page_result: PageResultDef | null;
}

export const factoryArrKeyObj = {
  all: [{ data: "factoryArr" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "factoryArr", requestObj }] as const,
};

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryArrKeyObj.detail>>): Promise<ResponseObjDef>;
}
