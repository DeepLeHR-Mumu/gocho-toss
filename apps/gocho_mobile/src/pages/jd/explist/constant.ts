import { OrderDef, TextDef } from "./type";

export const setJobOrderButtonArr: {
  text: TextDef;
  order: OrderDef;
}[] = [
  {
    text: "최신",
    order: "recent",
  },
  {
    text: "조회수",
    order: "view",
  },
  {
    text: "북마크",
    order: "popular",
  },
  {
    text: "기업이름",
    order: "name",
  },
];
