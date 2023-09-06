export interface CompanyCardProps {
  logoSrc: string;
  name: string;
  hashTagArr?: string[];
  bookmark?: { state: boolean; companyId: number };
}
