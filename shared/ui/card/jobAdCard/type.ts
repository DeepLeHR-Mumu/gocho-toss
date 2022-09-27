export interface JobAdCardProps {
  jobAdData: {
    id: number;
    companyName: string;
    companyLogo: string;
    startTime: number;
    endTime: number;
    title: string;
  };
  isSkeleton: boolean;
}

export interface JobAdCardSkeleton {
  jobAdData?: undefined;
  isSkeleton: boolean;
}
