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
    text: "최근 등록 순",
    order: "recent",
  },
  {
    text: "마감일 순",
    order: "end",
  },
  {
    text: "조회수 순",
    order: "view",
  },
];
