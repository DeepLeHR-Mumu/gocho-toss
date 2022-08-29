export interface AsidePartProps {
  companyId: number;
  isSkeleton?: never;
}

export interface AsidePartSkeleton {
  companyId?: number;
  isSkeleton: boolean;
}
