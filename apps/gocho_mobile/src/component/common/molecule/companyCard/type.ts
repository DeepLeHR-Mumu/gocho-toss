export interface CompanyCardProps {
  companyData: {
    id: number;
    name: string;
    logoUrl: string | null;
  };
  isBookmarked: boolean;
  isSkeleton?: never;
}

export interface CompanyCardSkeleton {
  companyData?: never;
  isBookmarked?: never;
  isSkeleton: boolean;
}
