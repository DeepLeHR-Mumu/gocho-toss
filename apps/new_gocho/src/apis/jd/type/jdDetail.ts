import { WelfareDef } from "@/apis/company/type/company";

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
  welfare: WelfareDef;
  size: string;
  industry: string;
  found_date: string;
  employee_number: number;
  is_bookmark: boolean;
}

export interface JdDetailObjDef {
  id: number;
  title: string;
  is_expired: boolean;
  view: number;
  bookmark: number;
  is_bookmark: boolean;
  company: {
    id: number;
    logo_url: string | null;
    name: string;
    size: string;
    industry: string[];
    employee_number: number;
    found_date: string;
    is_bookmark: boolean;
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
  };
  detail: {
    task_main: string;
    task_sub: string[];
    task_description: string[];
    contract_type: string;
    conversion_rate: number | null;
    hire_number: string;
    pay: string[];
    shift: string[];
    place: {
      is_undefined: boolean;
      data: (
        | {
            id: number;
            type: "일반";
            location: {
              address: string;
              x: number;
              y: number;
            };
          }
        | {
            id: number;
            type: "공장";
            factory: {
              id: number;
              name: string;
              address: string;
            };
          }
      )[];
      etc: "순환" | "해외" | null;
    };
  };
  qualification: {
    highschool: boolean;
    college: boolean;
    university: boolean;
    required_experience: string;
    required_min_year: number | null;
    required_max_year: number | null;
    required_etc: string[];
    preferred_certification: string[];
    preferred_etc: string[];
  };
  apply: {
    start_time: string;
    end_time: string;
    cut: boolean;
    process: string[];
    document: string[];
    route: {
      is_direct: boolean;
      link: string | null;
      email: string | null;
    };
    is_already_apply: boolean;
    etc: string[];
  };
}
