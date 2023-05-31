export type OrderDef = "recent" | "popular" | "view" | "end";
export type FilterDef = "ongoing" | "end" | "pending" | "permanent" | "all";
export interface SearchValues {
  searchWord: string | null;
}