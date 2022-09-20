import { QueryObserverResult } from "@tanstack/react-query";

export interface CompanyCardProps {
  companyData: {
    id: number;
    name: string;
    logoUrl: string;
  };
  isBookmarked: boolean;
  userId: number | undefined;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface CompanyCardSkeleton {
  companyData?: never;
  isBookmarked?: never;
  userId?: never;
  refetchUserBookmark?: never;
  isSkeleton: boolean;
}
