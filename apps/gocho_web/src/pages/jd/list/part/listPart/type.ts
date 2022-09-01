export type TextDef = "실시간" | "마감임박" | "조회수" | "인기";
export type OrderDef = "recent" | "popular" | "view" | "end";

export type SearchQueryDef = {
  possibleEdu: string[];
  place: string[];
  requiredExp: string[];
  contractType: string[];
  rotation: string[];
  industry: string[];
  task: string[];
  searchWord: string | null;
};

export interface changeOrderDef {
  (order: OrderDef): void;
}

export interface PostingValues {
  possibleEdu: string[];
  place: string[];
  requiredExp: string[];
  contractType: string[];
  rotation: string[];
  industry: string[];
  task: string[];
  searchWord: string | null;
}
