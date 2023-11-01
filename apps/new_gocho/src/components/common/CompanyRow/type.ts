export interface CompanyRowProps {
  company?: {
    id: number;
    logo: string | null;
    name: string;
    size: string;
    industry: string[];
    bookmark?: { state: boolean };
  };
  border?: boolean;
}
