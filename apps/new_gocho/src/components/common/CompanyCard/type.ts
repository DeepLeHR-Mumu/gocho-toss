export interface CompanyCardProps {
  id: number;
  logoSrc: string;
  name: string;
  hashTagArr?: string[];
  bookmark?: { state: boolean };
}
