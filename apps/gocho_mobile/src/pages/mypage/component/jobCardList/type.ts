export type JobListPartProps = {
  jobDataArr:
    | {
        id: number;
        companyName: string;
        companyLogo: string;
        endTime: number;
        title: string;
        cut: boolean;
      }[]
    | undefined
    | null;
  isLoading: boolean;
};
