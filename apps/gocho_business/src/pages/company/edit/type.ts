export interface PostSubmitValues {
  intro: string;
  address: string;
  nozo: {
    exists: boolean;
    desc: string;
  };
  catch_url: string;
  youtube_url: string;
  employee_number: number;
  welfare: {
    money: string[];
    health: string[];
    life: string[];
    holiday: string[];
    facility: string[];
    vacation: string[];
    growth: string[];
    etc: string[];
  };
  pay_avg: number;
  pay_start: number;
  pay_desc: string;
}
