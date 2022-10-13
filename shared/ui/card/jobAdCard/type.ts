export interface JobAdCardProps {
  jobAdData: {
    id: number;
    companyName: string;
    companyLogo: string;
    startTime: number;
    endTime: number;
    title: string;
  };
  isMobile: boolean;
  isSkeleton?: never;
}

export interface JobAdCardSkeleton {
  jobAdData?: never;
  isMobile?: never;
  isSkeleton: boolean;
}
