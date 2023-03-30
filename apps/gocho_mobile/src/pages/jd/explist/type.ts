export type OrderDef = "view" | "popular" | "name";

export interface changeOrderDef {
  (order: OrderDef): void;
}

export interface PostingValues {
  name: string | null;
}

export type SearchQueryDef = {
  name: string | null;
};
