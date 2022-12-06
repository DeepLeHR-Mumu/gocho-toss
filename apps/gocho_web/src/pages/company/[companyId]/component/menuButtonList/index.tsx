import { FunctionComponent } from "react";

import { MenuButtonListProps } from "./type";
import { buttonContainer, menuButton } from "./style";

export const MenuButtonList: FunctionComponent<MenuButtonListProps> = ({ activeMenu, refObj }) => {
  const moveScrollHandler = (ref: HTMLDivElement | null) => {
    if (ref) ref.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div css={buttonContainer}>
      <button
        type="button"
        css={menuButton(activeMenu === "일반 정보")}
        onClick={() => {
          moveScrollHandler(refObj.basicInfo);
        }}
      >
        일반 정보
      </button>
      <button
        type="button"
        css={menuButton(activeMenu === "복지 정보")}
        onClick={() => {
          moveScrollHandler(refObj.welfareInfo);
        }}
      >
        복지 정보
      </button>
      <button
        type="button"
        css={menuButton(activeMenu === "연봉 정보")}
        onClick={() => {
          moveScrollHandler(refObj.payInfo);
        }}
      >
        연봉 정보
      </button>
      <button
        type="button"
        css={menuButton(activeMenu === "공장 정보")}
        onClick={() => {
          moveScrollHandler(refObj.factoryInfo);
        }}
      >
        공장 정보
      </button>
    </div>
  );
};
