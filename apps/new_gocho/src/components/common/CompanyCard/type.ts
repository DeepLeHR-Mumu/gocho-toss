export interface CompanyCardProps {
  company?: {
    id: number;
    logoSrc: string;
    name: string;
    hashTagArr?: string[];
    bookmark?: { state: boolean };
  };
  replace?: boolean;
  callback?: () => void;
  blockClick?: boolean;
}
