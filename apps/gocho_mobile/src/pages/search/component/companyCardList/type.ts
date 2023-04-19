export type CompanyCardListProps = {
  companyDataArr?: {
    id: number;
    name: string;
    logoUrl: string | null;
    isBookmark: boolean;
  }[];
  isLoading: boolean;
};
