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
        cut: boolean;
      }[]
    | undefined;
  isLoading: boolean;
  isError: boolean;
  userJobBookmarkArr:
    | { id: number; title: string; endTime: number; company: { id: number; name: string } }[]
    | undefined;
  userId: number | undefined;
}
