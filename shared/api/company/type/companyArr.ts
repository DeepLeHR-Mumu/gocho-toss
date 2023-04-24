export interface CompanyDef {
  id: number;
  logo_url: string;
  name: string;
  business_number: string;
  youtube_url: null;
  industry: string;
  size: string;
  employee_number: number;
  found_date: string;
  address: string;
  intro: string;
  pay_avg: number;
  pay_start: number;
  pay_desc: string | null;
  bookmark: number;
  is_bookmark: false;
  view: number;
  comment_count: number;
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
}

export interface PageResultDef {
  total_elements: number;
  total_pages: number;
  page: number;
  size: number;
  is_first: boolean;
  is_last: boolean;
}
