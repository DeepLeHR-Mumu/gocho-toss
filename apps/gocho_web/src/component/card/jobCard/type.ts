import { QueryObserverResult } from "@tanstack/react-query";

export interface JobCardProps {
  jobData: {
    id: number;
    companyName: string;
    companyLogo: string;
    startTime: number;
    endTime: number;
    title: string;
    high: boolean;
    college: boolean;
    placeArr: string[];
    rotationArr: string[];
    taskArr: string[];
    bookmark: number;
    view: number;
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

export interface DDayBooleanReturnDef {
  (endTime: number): boolean;
}
