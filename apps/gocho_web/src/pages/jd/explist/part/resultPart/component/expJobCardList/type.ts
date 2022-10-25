export interface ExpJobCardListProps {
  companyDataArr:
    | {
        id: number;
        name: string;
        logoUrl: string;
      }[]
    | undefined;
  isLoading: boolean;
}
