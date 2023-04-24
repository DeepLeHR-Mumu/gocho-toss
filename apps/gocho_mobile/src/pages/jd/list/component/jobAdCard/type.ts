export interface SlideCardProps {
  jobData: {
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
  isSkeleton?: never;
}

export interface SlideCardSkeleton {
  jobData?: never;
  bgColor?: never;
  isSkeleton: boolean;
}
