import { QueryObserverResult } from "@tanstack/react-query";

export type CompanyCardListProps = {
  refetch: () => Promise<QueryObserverResult>;
  companyDataArr?: {
    id: number;
    name: string;
    logoUrl: string;
  }[];
};
