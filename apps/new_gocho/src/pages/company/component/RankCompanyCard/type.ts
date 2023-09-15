export interface RankItemProps {
  rank: number;
  company?: {
    id: number;
    name: string;
    size: string;
    logoUrl: string;
    industry: string;
  };
}
