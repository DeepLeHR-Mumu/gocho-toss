export type OrderDef = "recent" | "age" | "-age";

export interface changeOrderDef {
  (newOrder: OrderDef): void;
}
