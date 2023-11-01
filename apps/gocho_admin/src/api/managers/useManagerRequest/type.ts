import { QueryFunctionContext } from "@tanstack/react-query";

export interface RequestObjDef {
  managerId: number;
}

export interface ResponseObjDef {
  data: {
    id: number;
    status: {
      name: string;
      reason: string[];
    };
    is_first: boolean;
    name: string;
    gender: string;
    is_foreigner: boolean;
    birth_date: string;
    phone_numer: string;
    telecom: string;
    department: string;
    position: string;
    certification_url: string;
    company: {
      id: number;
      name: string;
      status: {
        name: string;
        reason: string[];
      };
      logo_url: string | null;
      background_image_url: string | null;
      business_number: string;
      youtube_url: string | null;
      industry: string[];
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
      pay_desc: string | null;
      bookmark: number;
      view: number;
      welfare: {
        money: string[];
        health: string[];
        life: string[];
        holiday: string[];
        facility: string[];
        vacation: string[];
        growth: string[];
        etc: string[];
      } | null;
      nozo: {
        exists: boolean;
        desc: string | null;
      };
      factory_arr: {
        id: number;
        status: string;
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
          exist: boolean;
          desc: string | null;
        };
      }[];
    };
  };
}

export const managerRequestKeyObj = {
  all: [{ data: "managerRequest" }] as const,
  arr: (requestObj: RequestObjDef) => [{ data: "managerRequest", requestObj }] as const,
};

export interface GetManagerRequestDef {
  ({ queryKey }: QueryFunctionContext<ReturnType<typeof managerRequestKeyObj.arr>>): Promise<ResponseObjDef>;
}
