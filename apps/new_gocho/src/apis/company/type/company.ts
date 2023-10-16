export interface WelfareDef {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}

export interface FactoryDef {
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

export interface LocationDef {
  address: string;
  x: number;
  y: number;
}

export interface CompanyObjDef {
  id: number;
  name: string;
  catch_url: string | null;
  youtube_url: string | null;
  industry: string;
  size: "대기업" | "중소기업" | "중견기업" | "외국계" | "공기업" | "공공기관" | "기타";
  employee_number: number;
  found_date: string;
  location: LocationDef;
  intro: string;
  pay_avg: number;
  pay_start: number;
  pay_desc: string | null;
  bookmark: number;
  is_bookmark: boolean;
  view: number;
  logo_url: string | null;
  background_image_url: string | null;
  welfare: WelfareDef;
  nozo: {
    exists: boolean;
    desc: string | null;
  };
  factory_arr: FactoryDef[];
}
