export interface BasicInfoPartProps {
  companyData: {
    industry: string;
    size: "대기업" | "중견기업" | "중소기업" | "외국계" | "공기업" | "공공기관" | "기타";
    employeeNumber: number;
    intro: string;
    foundDate: number;
    address: string;
    factoryAddress: string[];
    nozo: {
      exists: boolean;
      desc: string | null;
    };
  };
}
