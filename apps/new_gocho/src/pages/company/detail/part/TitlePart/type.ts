export interface TitlePartProps {
  company: { id: number; name: string; logoUrl: string | null };
  intro: string;
  bookmark: number;
  isBookmark: boolean;
  view: number;
}
