import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number | undefined;
}

export interface ResponseObjDef {
  data: {
    id: number;
    uploader: {
      name: string;
      department: string;
      is_mine: boolean;
      updated_time: string | null;
    };
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string[] | null;
    };
    logo_url: string;
    background_image_url: string;
    industry: string;
    business_number: string;
    name: string;
    size: string;
    employee_number: number;
    found_date: string;
    location: {
      address: string;
      x: number;
      y: number;
    };
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
    } | null;

    nozo: {
      exists: boolean;
      desc: string | null;
    };

    factory_arr: {
      id: number;
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
    }[];
  };
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: RequestObjDef) => [{ data: "companyDetail", requestObj }] as const,
};

export interface GetCompanyDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
