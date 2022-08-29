import { OrderDef } from "./type";

export const setSpecOrderButtonArr: {
  text: string;
  filter: OrderDef;
}[] = [
  {
    text: "최신순",
    filter: "recent",
  },
  {
    text: "나이 적은순",
    filter: "age",
  },
  {
    text: "나이 많은순",
    filter: "-age",
  },
];
