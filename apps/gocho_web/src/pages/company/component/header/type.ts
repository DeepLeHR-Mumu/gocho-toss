export interface HeaderProps {
  companyData: {
    id: number;
    logoUrl: string;
    bookmark: number;
    view: number;
    name: string;
    industry: string;
    catchUrl: string | null;
    youtubeUrl: string | null;
  };
  isBookmarked: boolean;
  userId: number | undefined;
}
