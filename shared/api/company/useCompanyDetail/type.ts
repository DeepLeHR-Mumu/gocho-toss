import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseQueryResult, QueryFunctionContext } from "@tanstack/react-query";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
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
  factoryName: string;
  id: number;
  companyId: number;
  place1: string;
  place2: string;
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
  industry: string;
  size: "대기업" | "중견기업" | "중소기업" | "외국계" | "공기업" | "공공기관" | "기타";
  catchUrl: string | null;
  youtubeUrl: string | null;
  logoUrl: string;
  employeeNumber: number;
  foundDate: number;
  address: string;
  intro: string;
  payAvg: number | null;
  payStart: number | null;
  payDesc: string | null;
  bookmark: number;
  view: number;
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
  // ({ queryKey }: RequestObjDef): Promise<CompanyDetailResponseDef>;
  ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof companyDetailKeyObj.detail>>): Promise<CompanyDetailResponseDef>;
}

export interface UseCompanyDetailDef {
  (requestObj: RequestObjDef): UseQueryResult<UseCompanyDetailResultDef, AxiosError>;
}
