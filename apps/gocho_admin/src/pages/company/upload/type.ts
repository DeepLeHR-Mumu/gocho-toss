export interface CompanyFormValues {
  name: string;
  business_number: number;
  youtube_url: string | null;
  industry: string;
  size: string;
  employee_number: number;
  found_date: string;
  address: string;
  intro: string;
  pay_avg: number | null;
  pay_start: number | null;
  pay_desc: string | null;
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

  factory_arr: {
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
