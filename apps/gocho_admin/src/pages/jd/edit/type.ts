export interface JobFormValues {
  id: number;
  company_id: number;
  title: string;
  start_time: string;
  end_time: string;
  cut: boolean;
  process_arr: string;
  apply_route_arr: string;
  apply_document_arr: string;
  apply_url: string;
  etc_arr: string | null;
  middle: boolean;
  high: boolean;
  college: boolean;
  four: boolean;
  required_exp: string;
  min_year: number | null;
  max_year: number | null;
  required_etc_arr: string | null;
  contract_type: string;
  conversion_rate: number | null;
  task_main: string;
  task_sub_arr: string[];
  task_detail_arr: string;
  rotation_arr: string[];
  place: {
    type: string;
    address_arr: string[] | null;
    factory_arr: number[] | null;
    etc: string | null;
  };
  hire_number: number;
  pay_arr: string;
  preferred_certi_arr: string[] | null;
  preferred_etc_arr: string | null;
}
