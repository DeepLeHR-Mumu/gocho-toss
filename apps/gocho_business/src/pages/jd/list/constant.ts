import { OrderDef } from "./type";

export const setJobOrderButtonArr: {
  text: string;
  order: OrderDef;
}[] = [
  {
    text: "최신",
    order: "recent",
  },
  {
    text: "마감임박",
    order: "end",
  },
  {
    text: "조회수 높은",
    order: "view",
  },
  {
    text: "북마크 많은",
    order: "popular",
  },
];
