export interface CompanyRowProps {
  id: number;
  logo: string;
  name: string;
  size: string;
  industry: string;
  bookmark?: { state: boolean };
  border?: boolean;
}
