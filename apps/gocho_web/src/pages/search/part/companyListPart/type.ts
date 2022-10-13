export type CompanyListPartProps = {
  companyDataArr:
    | {
        id: number;
        name: string;
        logoUrl: string;
      }[]
    | undefined;
  isLoading: boolean;
  total: number;
  limit: number;
};
