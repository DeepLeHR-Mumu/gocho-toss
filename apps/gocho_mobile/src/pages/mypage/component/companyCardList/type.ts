export type CompanyCardListProps = {
  companyDataArr:
    | {
        id: number;
        name: string;
        logoUrl: string;
      }[]
    | undefined
    | null;
  isLoading: boolean;
};
