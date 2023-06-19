export type OrderDef = "recent" | "popular" | "view" | "end";
export type FilterDef = "todayUpload" | "almostDeadline" | "deadline" | "expired" | "valid";
export interface SearchValues {
  searchWord: string | null;
}
