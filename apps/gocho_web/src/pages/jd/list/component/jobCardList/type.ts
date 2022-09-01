export interface JobCardListProps {
  jobDataArr:
    | {
        id: number;
        companyName: string;
        companyLogo: string;
        startTime: number;
        endTime: number;
        title: string;
        high: boolean;
        college: boolean;
        placeArr: string[];
        rotationArr: string[];
        taskArr: string[];
        bookmark: number;
        view: number;
      }[]
    | undefined;
  isLoading: boolean;
  isError: boolean;
}
