import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    id: number;
    status: "등록전" | "승인됨" | "반려됨" | "검수중";
    uploader: { name: string; department: string };
    name: string;
    employee_number: number;
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
  }[];
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
};

export interface GetCompanyDetailDef {
  ({ queryKey }: QueryFunctionContext): Promise<ResponseObjDef>;
}
