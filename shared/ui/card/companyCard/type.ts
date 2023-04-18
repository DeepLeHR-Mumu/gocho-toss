import { QueryObserverResult } from "@tanstack/react-query";

export interface CompanyCardProps {
  companyData: {
    id: number;
    name: string;
    logoUrl: string;
    isBookmark?: boolean;
  };
  refetchUserBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface CompanyCardSkeleton {
  companyData?: never;
  refetchUserBookmark?: never;
  isSkeleton: boolean;
}
