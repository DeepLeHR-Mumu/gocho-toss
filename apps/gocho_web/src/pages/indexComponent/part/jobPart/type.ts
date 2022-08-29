export type textDef = "실시간" | "마감임박" | "조회수" | "인기";
export type OrderDef = "recent" | "popular" | "view" | "end";

export interface changeOrderDef {
  (order: OrderDef): void;
}
