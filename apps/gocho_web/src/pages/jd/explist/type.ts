export type TextDef = "최신" | "조회수" | "북마크" | "기업이름";
export type OrderDef = "recent" | "view" | "popular" | "name";
export type SearchType = string | undefined;

export type SearchQueryDef = {
  name: string | null;
};

export interface changeOrderDef {
  (order: OrderDef): void;
}

export interface PostingValues {
  name: string | null;
}
