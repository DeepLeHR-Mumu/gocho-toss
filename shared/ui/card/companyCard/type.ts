import { QueryObserverResult } from "@tanstack/react-query";

export interface CompanyCardProps {
  companyData: {
    id: number;
    name: string;
    logoUrl: string;
    isBookmark?: boolean;
  };
  refetchUserCompanyBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface CompanyCardSkeleton {
  companyData?: never;
  refetchUserCompanyBookmark?: never;
  isSkeleton: boolean;
}
