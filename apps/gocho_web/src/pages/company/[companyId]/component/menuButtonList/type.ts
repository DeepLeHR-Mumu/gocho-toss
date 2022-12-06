export type activeMenuDef = {
  title: "일반 정보" | "복지 정보" | "연봉 정보" | "공장 정보";
  id: "basicInfo" | "welfareInfo" | "payInfo" | "factoryInfo";
};

export interface MenuButtonListProps {
  activeMenu: "일반 정보" | "복지 정보" | "연봉 정보" | "공장 정보";
  refObj: {
    basicInfo: null | HTMLDivElement;
    factoryInfo: null | HTMLDivElement;
    payInfo: null | HTMLDivElement;
    welfareInfo: null | HTMLDivElement;
  };
}
