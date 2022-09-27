export interface HeaderFixProps {
  jobDetailData: {
    id: number;
    endTime: number;
    applyUrl: string;
    title: string;
    cut: boolean;
    bookmarkCount: number;
    company: {
      companyId: number;
      name: string;
      logoUrl: string;
    };
  };
  isBookmarked: boolean;
  userId: number | undefined;
}
