export interface JobFormValues {
  company_id: number;
  title: string;
  start_time: number;
  end_time: number;
  cut: boolean;
  process_arr: string[];
  apply_route_arr: string[];
  apply_url: string;
  etc_arr: string[];
  position_arr: {
    middle: boolean;
    high: boolean;
    college: boolean;
    four: boolean;
    required_exp: string;
    min_year: number | null;
    max_year: number | null;
    required_etc_arr: string[] | undefined | null;
    contract_type: string;
    conversion_rate: number | null;
    task_main: string;
    task_sub_arr: string[] | undefined;
    task_detail_arr: string[] | undefined;
    rotation_arr: string[] | undefined;
    rotation_etc: string | null;
    place: {
      type: string;
      address_arr: string[];
      factory_arr: number[];
      etc: string;
    };
    hire_number: number | undefined;
    pay_arr: string[] | undefined;
    preferred_certi_arr: string[] | undefined | null;
    preferred_etc_arr: string[] | undefined | null;
  }[];
}