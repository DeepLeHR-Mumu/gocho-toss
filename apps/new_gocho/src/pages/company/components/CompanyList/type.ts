import { useCompanyArr } from "@/apis/company";

type CompanyRes = ReturnType<typeof useCompanyArr>;

type CompanyData = CompanyRes["data"];

export interface CompanyListProps {
  companyData: CompanyData;
}
