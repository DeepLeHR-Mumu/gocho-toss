export type JobListPartProps = {
  jobDataArr:
    | {
        id: number;
        companyId: number;
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
        cut: boolean;
      }[]
    | undefined;
  isLoading: boolean;
  total: number;
  limit: number;
};
