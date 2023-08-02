import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  word: string;
}

export interface ResponseObjDef {
  data: {
    id: number;
    name: string;
    business_number: string;
  }[];
  count: number;
}

export const companyArrFindKeyObj = {
  all: [{ data: "companyArrFind" }] as const,
  find: (requestObj: RequestObjDef) => [{ data: "companyArrFind", requestObj }] as const,
};

export interface GetCompanyArrDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyArrFindKeyObj.find>>): Promise<ResponseObjDef>;
}
