import { QueryObserverResult } from "@tanstack/react-query";

export interface CompanyCardProps {
  companyData: {
    id: number;
    name: string;
    logoUrl: string | null;
  };
  isBookmarked: boolean;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface CompanyCardSkeleton {
  companyData?: never;
  isBookmarked?: never;
  refetchUserBookmark?: never;
  isSkeleton: boolean;
}
