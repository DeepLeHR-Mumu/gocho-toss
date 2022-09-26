export interface HeaderFixProps {
  jobDetailData: {
    id: number;
    endTime: number;
    applyUrl: string;
    title: string;
    bookmarkCount: number;
    company: {
      companyId: number;
      name: string;
    };
  };
  isBookmarked: boolean;
  userId: number | undefined;
}
