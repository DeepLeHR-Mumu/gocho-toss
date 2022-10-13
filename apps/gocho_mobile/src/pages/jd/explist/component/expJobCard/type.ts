export interface ExpJobCardProps {
  companyData: {
    id: number;
    name: string;
    logoUrl: string;
  };
  isSkeleton?: never;
}

export interface ExpJobCardSkeleton {
  companyData?: never;
  isSkeleton: boolean;
}
