export interface JobCardListProps {
  jobDataArr:
    | {
        id: number;
        companyName: string;
        companyLogo: string | null;
        companyId: number;
        startTime: number;
        endTime: number;
        title: string;
        high: boolean;
        positionCount: number;
        college: boolean;
        placeArr: string[];
        rotationArr: string[];
        taskArr: string[];
        bookmark: number;
        view: number;
        cut: boolean;
      }[]
    | undefined;
  isLoading: boolean;
  isError: boolean;
}
