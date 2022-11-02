export interface JobAdCardProps {
  jobAdData: {
    id: number;
    color?: string;
    companyName?: string;
    companyLogo?: string;
    startTime: number;
    endTime: number;
    jdStartTime: number;
    jdEndTime: number;
    jdId?: number;
    title?: string;
  };
  isMobile: boolean;
  isSkeleton?: never;
}

export interface JobAdCardSkeleton {
  jobAdData?: never;
  isMobile?: never;
  isSkeleton: boolean;
}
