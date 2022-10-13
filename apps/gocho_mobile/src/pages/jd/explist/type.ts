export type OrderDef = "recent" | "view" | "popular" | "name";

export interface changeOrderDef {
  (order: OrderDef): void;
}

export interface PostingValues {
  q: string;
}
