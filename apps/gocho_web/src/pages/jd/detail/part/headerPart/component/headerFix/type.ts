export interface HeaderFixProps {
  isDdayEnd: boolean;
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
  userId: number | undefined;
}
