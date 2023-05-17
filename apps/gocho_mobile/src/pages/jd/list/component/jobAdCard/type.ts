export interface SlideCardProps {
  jobData: {
    id: number;
    color: string;
    startTime: string;
    endTime: string;
    jd: {
      company: {
        id: number;
        logoUrl: string;
        name: string;
      };
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
