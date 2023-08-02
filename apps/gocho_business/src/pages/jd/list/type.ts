export type OrderDef = "recent" | "popular" | "view" | "end";
export type FilterDef =
  | "todayUpload"
  | "almostDeadline"
  | "deadline"
  | "expired"
  | "valid"
  | "progress"
  | "waiting"
  | "reject"
  | undefined;
export interface SearchValues {
  searchWord: string | null;
}
