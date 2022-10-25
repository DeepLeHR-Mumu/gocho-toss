import { OrderDef, TextDef } from "../../type";

export const setJobOrderButtonArr: {
  text: TextDef;
  order: OrderDef;
  icon: string;
}[] = [
  {
    text: "최신",
    order: "recent",
    icon: "📬",
  },
  {
    text: "조회수",
    order: "view",
    icon: "👀",
  },
  {
    text: "북마크",
    order: "popular",
    icon: "🔖",
  },
  {
    text: "기업이름",
    order: "name",
    icon: "🔠",
  },
];
