import { QueryFunctionContext } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponseDef } from "@/types/errorType";
// import { AxiosError, AxiosResponse } from "axios";

// import { ErrorResponseDef } from "@/types/errorType";

export interface RequestObjDef {
  companyId: number;
}
export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: string;
      reason: string | null;
    };
    business_number: string;
    name: string;
    size: string;
    employee_number: number;
    found_date: number;
    address: string;
    intro: string;
    pay_avg: number;
    pay_start: number;
    pay_desc: string;
    bookmark: number;
    view: number;
    welfare: {
      money: string[] | null;
      health: string[] | null;
      life: string[] | null;
      holiday: string[] | null;
      facility: string[] | null;
      vacation: string[] | null;
      growth: string[] | null;
      etc: string[] | null;
    };
    nozo: {
      exists: boolean;
      desc: string | null;
    };
  };
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "companyDetail", requestObj }] as const,
};

export interface GetCompanyDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<
    AxiosResponse<ResponseObjDef> | AxiosError<ErrorResponseDef>
  >;
}
