export type MainJobCardProps = {
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
    taskArr: string[];
  };
  isMobile: boolean;
  isSkeleton?: never;
  loginOpener: () => void;
};

export type MainJobCardSkeleton = {
  jobData?: never;
  isMobile?: never;
  isSkeleton: boolean;
  loginOpener?: never;
};
