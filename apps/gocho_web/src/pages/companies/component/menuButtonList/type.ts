import { RefObject } from "react";

export type activeMenuDef =
  | "일반 정보"
  | "복지 정보"
  | "연봉 정보"
  | "공장 정보";

export interface MenuButtonListProps {
  activeMenu: activeMenuDef;
  tab: (() => void)[];
  tabClick: RefObject<HTMLDivElement>;
}
