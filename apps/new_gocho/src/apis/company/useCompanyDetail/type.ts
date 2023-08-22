import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseQueryResult, QueryFunctionContext } from "@tanstack/react-query";
import { companyDetailKeyObj } from "@/constants/queryKeyFactory/company/companyDetailKeyObj";
import { CompanyObjDef } from "../type/company";

export interface WelfareProps {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}

export interface FactoryProps {
  name: string;
  id: number;
  companyId: number;
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

export interface CompanyProps {
  id: number;
  name: string;
  catchUrl: string | null;
  youtubeUrl: string | null;
  industry: string;
  size: "대기업" | "중소기업" | "중견기업" | "외국계" | "공기업" | "공공기관" | "기타";
  employeeNumber: number;
  foundDate: string;
  address: string;
  intro: string;
  payAvg: number;
  payStart: number;
  payDesc: string | null;
  bookmark: number;
  isBookmark: boolean;
  view: number;
  logoUrl: string | null;
  welfare: WelfareProps;
  nozo: {
    exists: boolean;
    desc: string | null;
  };
  factoryArr: FactoryProps[];
}

export interface RequestObjDef {
  companyId: number;
}

export interface CompanyDetailResponseDef extends ResponseDef {
  data: CompanyObjDef;
}

export interface UseCompanyDetailResultDef {
  data: CompanyProps;
}

export interface GetCompanyDetailDef {
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<CompanyDetailResponseDef>;
}

export interface UseCompanyDetailDef {
  (requestObj: RequestObjDef): UseQueryResult<UseCompanyDetailResultDef, AxiosError>;
}
