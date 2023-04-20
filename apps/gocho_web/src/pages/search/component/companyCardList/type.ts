import { QueryObserverResult } from "@tanstack/react-query";

export type CompanyCardListProps = {
  companyDataArr?: {
    id: number;
    name: string;
    logoUrl: string;
  }[];
  refetchUserCompanyBookmark: () => Promise<QueryObserverResult>;
};
