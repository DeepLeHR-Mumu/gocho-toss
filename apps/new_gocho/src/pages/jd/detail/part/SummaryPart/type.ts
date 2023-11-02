export interface SummaryPartProps {
  jd?: {
    company: { id: number; logoUrl: string | null; name: string; size: string; industry: string[] };
    title: string;
    endTime: string;
    view: number;
    cut: boolean;
  };
}
