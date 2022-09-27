export type CompanyListPartProps = {
  companyDataArr:
    | {
        id: number;
        name: string;
        logoUrl: string;
      }[]
    | undefined;
  count: number | undefined;
  isLoading: boolean;
};
