export interface FactoryObjDef {
  id: number;
  name: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  bus: {
    exists: boolean;
    desc: string | null;
  };
  dormitory: {
    exists: boolean;
    desc: string | null;
  };
}

export interface JdCompanyObjDef {
  id: number;
  name: string;
  logo_url: string;
  youtube_url: string;
  comment_count: number;
}

export interface JdDetailObjDef {
  id: number;
  company: JdCompanyObjDef;
  title: string;
  cut: boolean;
  start_time: string;
  end_time: string;
  process_arr: string[];
  apply_route_arr: string[];
  apply_document_arr: string[];
  apply_url: string;
  etc_arr: string[];
  bookmark: number;
  is_bookmark: boolean;
  view: number;
  click: number;
  possible_edu: {
    summary: string;
    college: boolean;
    high: boolean;
    middle: boolean;
    four: boolean;
  };
  required_exp: {
    type: "신입" | "경력" | "무관" | "신입/경력";
    min_year: number | null;
    max_year: number | null;
  };
  required_etc_arr: string[];
  contract_type: {
    type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
    conversion_rate: number | null;
  };
  task: {
    main_task: string;
    sub_task_arr: string[];
  };
  task_detail_arr: string[];
  rotation_arr: string[];
  place: {
    type: "일반" | "해외" | "기타";
    address_arr: string[];
    factory_arr: FactoryObjDef[];
    etc: string | null;
  };
  hire_number: string;
  pay_arr: string[];
  preferred_certi_arr: string[];
  preferred_etc_arr: string[];
}
