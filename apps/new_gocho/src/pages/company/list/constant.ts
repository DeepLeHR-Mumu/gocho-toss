import { OrderType } from "./type";

interface filterArrDef {
  content: string;
  order: OrderType;
}

export const filterOption: filterArrDef[] = [
  {
    content: "이름 순",
    order: "name",
  },
  {
    content: "팔로워 많은 순",
    order: "popular",
  },
  {
    content: "리뷰 많은 순",
    order: "comment",
  },
];
