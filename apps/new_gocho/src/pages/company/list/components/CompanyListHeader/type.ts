export interface CompanyListHeaderProps {
  category: string | undefined;
  defaultFilter: string;
  filterOption: { key: number; content: string; setState: () => void }[];
}
