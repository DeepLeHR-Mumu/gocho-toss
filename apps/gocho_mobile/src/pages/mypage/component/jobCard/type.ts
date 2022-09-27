import { QueryObserverResult } from "@tanstack/react-query";

export interface JobCardProps {
  jobData: {
    id: number;
    companyName: string;
    companyLogo: string;
    endTime: number;
    title: string;
    cut: boolean;
  };
  isBookmarked: boolean;
  userId: number | undefined;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface JobCardSkeleton {
  jobData?: never;
  isBookmarked?: never;
  userId?: never;
  refetchUserBookmark?: never;
  isSkeleton: boolean;
}
