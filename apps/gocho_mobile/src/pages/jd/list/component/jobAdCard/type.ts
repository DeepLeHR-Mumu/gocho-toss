export interface SlideCardProps {
  jobData: {
    id: number;
    color?: string;
    companyName?: string;
    companyLogo?: string;
    startTime: number;
    endTime: number;
    jdStartTime: number;
    jdEndTime: number;
    title?: string;
  };
  isSkeleton?: never;
}

export interface SlideCardSkeleton {
  jobData?: never;
  bgColor?: never;
  isSkeleton: boolean;
}
