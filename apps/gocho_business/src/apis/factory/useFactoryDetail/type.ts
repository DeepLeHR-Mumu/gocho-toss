import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
}

export interface ResponseObjDef {
  data: {
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
  };
}

export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "factoryDetail", requestObj }] as const,
};

export interface GetFactoryDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof factoryDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
