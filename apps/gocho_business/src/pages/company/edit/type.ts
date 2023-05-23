export interface CompanyFormValues {
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
}
