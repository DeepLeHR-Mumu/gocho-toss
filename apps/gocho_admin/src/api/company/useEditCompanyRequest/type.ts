import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  companyId: number;
}

interface WelfareObjDef {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}

interface FactoryObjDef {
  name: string;
  id: number;
  company_id: number;
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
}

export interface ResponseObjDef {
  data: {
    id: number;
    name: string;
    business_number: string;
    catch_url: string;
    youtube_url: string | null;
    industry: string;
    size: "대기업" | "중견기업" | "중소기업" | "외국계" | "공기업" | "공공기관" | "기타";
    employee_number: number;
    found_date: number;
    address: string;
    intro: string;
    pay_avg: number | null;
    pay_start: number | null;
    pay_desc: string | null;
    bookmark: number;
    view: number;
    logo_url: string | null;
    welfare: WelfareObjDef | null;
    nozo: {
      exists: boolean;
      desc: string | null;
    };
    factory_arr: FactoryObjDef[] | null;
  };
}

export const companyDetailKeyObj = {
  all: [{ data: "companyDetail" }] as const,
  detail: (requestObj: RequestObjDef) => {
    return [{ data: "companyDetail", requestObj }] as const;
  },
};

export interface GetEditCompanyRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
