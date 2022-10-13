export interface CompanyFormValues {
  name: string;
  file_id: number;
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
    money: string;
    health: string;
    life: string;
    holiday: string;
    facility: string;
    vacation: string;
    growth: string;
    etc: string;
  };

  nozo: {
    exists: boolean;
    desc: string;
  };

  factories: {
    factory_name: string;
    address: string;
    male_number: number;
    female_number: number;
    product: string;
    bus_bool: boolean;
    bus_etc: string;
    dormitory_bool: boolean;
    dormitory_etc: string;
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
