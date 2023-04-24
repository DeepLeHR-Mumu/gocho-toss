interface WelfareObjDef {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}

export interface CompanyPartProps {
  company: {
    id: number;
    name: string;
    businessNumber: string;
    catchUrl: string;
    youtubeUrl: string | null;
    industry: string;
    size: "대기업" | "중견기업" | "중소기업" | "외국계" | "공기업" | "공공기관" | "기타";
    employeeNumber: number;
    foundDate: string;
    address: string;
    intro: string;
    payAvg: number | null;
    payStart: number | null;
    payDesc: string | null;
    bookmark: number;
    view: number;
    logoUrl: string | null;
    nozo: {
      exists: boolean;
      desc: string | null;
    };
    welfare: WelfareObjDef | null;
  };
}
