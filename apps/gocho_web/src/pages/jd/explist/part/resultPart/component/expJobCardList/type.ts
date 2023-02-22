export interface ExpJobCardListProps {
  companyDataArr:
    | {
        id: number;
        name: string;
        logoUrl: string | null;
      }[]
    | undefined;
  isLoading: boolean;
}
