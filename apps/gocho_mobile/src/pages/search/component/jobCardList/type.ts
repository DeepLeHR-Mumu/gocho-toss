export type JobListPartProps = {
  jobDataArr:
    | {
        id: number;
        companyName: string;
        companyLogo: string | null;
        startTime: number;
        endTime: number;
        title: string;
        high: boolean;
        college: boolean;
        placeArr: string[];
        rotationArr: string[];
        taskArr: string[] | null[];
        bookmark: number;
        view: number;
        cut: boolean;
      }[]
    | undefined;
  isLoading: boolean;
};
