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

interface factoryObjDef {
  id: number;
  name: string;
  address: string;
  maleNumber: number;
  femaleNumber: number;
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
    location: {
      address: string;
      x: number;
      y: number;
    };
    intro: string;
    payAvg: number | null;
    payStart: number | null;
    payDesc: string | null;
    bookmark: number;
    view: number;
    logoUrl: string | null;
    bgImageUrl: string | null;
    nozo: {
      exists: boolean;
      desc: string | null;
    };
    welfare: WelfareObjDef | null;
    factoryArr: factoryObjDef[] | null;
  };
}
