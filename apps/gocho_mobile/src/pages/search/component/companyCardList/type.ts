export type CompanyCardListProps = {
  companyDataArr:
    | {
        id: number;
        name: string;
        logoUrl: string | null;
      }[]
    | undefined;
  isLoading: boolean;
};
