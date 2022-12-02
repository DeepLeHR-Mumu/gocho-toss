export interface CompanyDef {
  id: number;
  name: string;
  logo_url: string;
  comment_count: number;
}

export interface WelfareObjDef {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}

export interface FactoryObjDef {
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

export interface CompanyDetailObjDef {
  id: number;
  name: string;
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
  factory_arr: FactoryObjDef[];
}
