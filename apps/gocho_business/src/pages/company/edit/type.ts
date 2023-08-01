export interface CompanyFormValues {
  logo_url: string;
  background_image_url: string;
  industry: string;
  size: string;
  found_date: string;
  intro: string;
  location: {
    address: string;
    x: number;
    y: number;
  };
  nozo: {
    exists: "true" | "false";
    desc: string | null;
  };
  employee_number: number;
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
  pay_avg: number;
  pay_start: number;
  pay_desc: string | null;
  factory_arr: {
    id?: number;
    factory_name: string;
    product: string;
    address: string;
    male_number: number;
    female_number: number;
    bus_bool: boolean;
    bus_etc: string | null;
    dormitory_bool: boolean;
    dormitory_etc: string | null;
  }[];
}
