export interface ExpJobCardListProps {
  companyDataArr:
    | {
        id: number;
        logoUrl: string | null;
        name: string;
      }[]
    | undefined;
  isLoading: boolean;
}
