export interface SlideCardProps {
  jobData: {
    endTime: number;
    companyName: string;
    title: string;
  };
  bgColor: string;
  isSkeleton?: never;
}

export interface SlideCardSkeleton {
  jobData?: never;
  bgColor?: never;
  isSkeleton: boolean;
}
