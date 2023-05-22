export interface JobCardProps {
  jobData: {
    id: number;
    company: {
      id: number;
      name: string;
      logoUrl: string;
    };
    title: string;
    cut: boolean;
    startTime: string;
    endTime: string;
    createdTime: string;
    updatedTime: string | null;
    applyUrl: string;
    bookmark: number;
    isBookmark: boolean;
    view: number;
    click: number;
    positionCount: number;
    high: boolean;
    college: boolean;
    requiredExpArr: string[];
    placeArr: string[];
    rotationArr: string[];
    contractType: string[];
    task: string;
  };
  isSkeleton?: never;
}

export interface JobCardSkeleton {
  jobData?: never;
  refetchUserBookmark?: never;
  isSkeleton: boolean;
}

export interface DDayBooleanReturnDef {
  (endTime: string): boolean;
}
