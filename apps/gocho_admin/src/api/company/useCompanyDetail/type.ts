import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { QueryFunctionContext } from "@tanstack/react-query";

export interface ResponseObjDef {
  data: {
    id: number;
    name: string;
    business_number: number;
    catch_url: string;
    youtube_url: string;
    industry: string;
    size: string;
    employee_number: number;
    found_date: number;
    address: string;
    intro: string;
    bookmark: number;
    view: number;
    logo_url: string;
    pay_avg: number;
    pay_start: number;
    pay_desc: string;
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

    factory_arr:
      | {
          id: number;
          company_id: number;
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
        }[]
      | null;
  };
}

export interface GetCompanyDetailDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<ResponseObjDef>;
}
