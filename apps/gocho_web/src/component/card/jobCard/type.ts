export interface JobCardProps {
  jobData: {
    id: number;
    companyId: number;
    companyName: string;
    companyLogo: string | null;
    startTime: number;
    endTime: number;
    title: string;
    high: boolean;
    college: boolean;
    placeArr: string[];
    positionCount: number;
    rotationArr: string[];
    taskArr: string[];
    bookmark: number;
    view: number;
    cut: boolean;
  };
  isBookmarked: boolean;
  userId: number | undefined;
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
