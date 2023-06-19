import { OrderDef, FilterDef } from "./type";

export const JD_FILTER_BUTTON_ARR: {
  text: string;
  filter: FilterDef;
}[] = [
  {
    text: "진행중",
    filter: "valid",
  },
  {
    text: "공고마감",
    filter: "expired",
  },
  {
    text: "대기중",
    filter: "almostDeadline",
  },
  {
    text: "전체",
    filter: "deadline",
  },
];

export const JD_ORDER_BUTTON_ARR: {
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
