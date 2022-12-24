import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data:
    | {
        id: number;
        status: { name: "등록전" | "승인됨" | "반려됨" | "검수중"; reason: null | "string" };
        uploader: { name: string; department: string };
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
        created_time: number;
        updated_time: number | null;
      }[]
    | [];
}

export const factoryArrKeyObj = {
  all: [{ data: "factoryArr" }] as const,
};

export interface GetFactoryArrDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
