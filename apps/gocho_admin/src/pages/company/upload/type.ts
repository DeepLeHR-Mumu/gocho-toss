export interface CompanyFormValues {
  name: string;
  file_id: string;
  business_number: number;
  catch_url: string;
  youtube_url: string;
  industry: string;
  size: string;
  employee_number: number;
  found_date: number;
  address: string;
  intro: string;
  pay_avg: number;
  pay_start: number;
  pay_desc: string;
  welfare: {
    money: string | null;
    health: string | null;
    life: string | null;
    holiday: string | null;
    facility: string | null;
    vacation: string | null;
    growth: string | null;
    etc: string | null;
  };

  nozo: {
    exists: boolean;
    desc: string | null;
  };

  factories: {
    factory_name: string;
    address: string;
    male_number: number;
    female_number: number;
    product: string;
    bus_bool: boolean;
    bus_etc: string | null;
    dormitory_bool: boolean;
    dormitory_etc: string | null;
  }[];
}

export type welfareArrDef = {
  title: string;
  data:
    | "welfare.money"
    | "welfare.health"
    | "welfare.life"
    | "welfare.holiday"
    | "welfare.facility"
    | "welfare.vacation"
    | "welfare.growth"
    | "welfare.etc";
}[];
