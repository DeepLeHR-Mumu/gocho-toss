export interface JobAdCardProps {
  jobAdData: {
    id: number;
    color: string;
    startTime: string;
    endTime: string;
    company: {
      id: number;
      logoUrl: string;
      name: string;
    };
    jd: {
      id: number;
      title: string;
      startTime: string;
      endTime: string;
    };
  };
  isMobile: boolean;
  isSkeleton?: never;
}

export interface JobAdCardSkeleton {
  jobAdData?: never;
  isMobile?: never;
  isSkeleton: boolean;
}
