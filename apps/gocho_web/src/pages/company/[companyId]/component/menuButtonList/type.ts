import { MutableRefObject } from "react";

export interface MenuButtonListProps {
  activeMenu: "일반 정보" | "복지 정보" | "연봉 정보" | "공장 정보";
  refObj: {
    basicInfoRef: MutableRefObject<HTMLDivElement | null>;
    factoryInfoRef: MutableRefObject<HTMLDivElement | null>;
    payInfoRef: MutableRefObject<HTMLDivElement | null>;
    welfareInfoRef: MutableRefObject<HTMLDivElement | null>;
  };
}
