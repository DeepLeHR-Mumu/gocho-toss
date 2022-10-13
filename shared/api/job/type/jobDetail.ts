export interface FactoryObjDef {
  id: number;
  company_id: number;
  place_1: string;
  place_2: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  name: string;
  bus: {
    exists: boolean;
    desc: string | null;
  };
  dormitory: {
    exists: boolean;
    desc: string | null;
  };
}

export interface PositionObjDef {
  id: number;
  jd_id: number;
  required_exp: {
    type: "신입" | "경력" | "무관" | "신입/경력";
    max_year: number;
    min_year: number;
  };
  required_etc_arr: string[] | null;
  contract_type: {
    type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
    conversion_rate: number | null;
  };
  task_detail_arr: string[];
  rotation_arr: string[];
  place: {
    address_arr: string[] | null;
    factory_arr: FactoryObjDef[] | null;
    etc: string | null;
    type: "일반" | "전국" | "해외" | "기타";
  };
  hire_number: number;
  pay_arr: number[] | null;
  preferred_certi_arr: string[] | null;
  preferred_etc_arr: string[] | null;
  created_time: number;
  possible_edu: {
    summary: string;
    middle: boolean;
    high: boolean;
    college: boolean;
    four: boolean;
  };
  task: {
    main_task: string;
    sub_task_arr: string[] | null;
  };
}

export interface JobDetailObjDef {
  id: number;
  created_time: number;
  start_time: number;
  end_time: number;
  process_arr: string[];
  apply_route_arr: string[];
  apply_url: string;
  etc_arr: string[];
  title: string;
  cut: boolean;
  bookmark: number;
  view: number;
  position_arr: PositionObjDef[];
  company: {
    id: number;
    name: string;
    logo_url: string;
    youtube_url: string | null;
  };
}
