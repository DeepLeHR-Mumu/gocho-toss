import { OrderDef, textDef } from "./type";

export const setJobOrderButtonArr: {
  text: textDef;
  order: OrderDef;
}[] = [
  {
    text: "실시간",
    order: "recent",
  },
  {
    text: "마감임박",
    order: "end",
  },
  {
    text: "조회수",
    order: "view",
  },
  {
    text: "인기",
    order: "popular",
  },
];
