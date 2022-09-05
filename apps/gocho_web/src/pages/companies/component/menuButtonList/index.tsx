import { FunctionComponent } from "react";

import { buttonContainer, menuButton } from "./style";
import { menuButtonArr } from "./constant";
import { MenuButtonListProps } from "./type";

export const MenuButtonList: FunctionComponent<MenuButtonListProps> = ({ activeMenu, tab, tabClick }) => {
  return (
    <div css={buttonContainer} ref={tabClick}>
      {menuButtonArr.map((text, index) => {
        const isActive = text === activeMenu;
        return (
          <button type="button" css={menuButton(isActive)} key={`companyDetailMenu${text}`} onClick={tab[index]}>
            {text}
          </button>
        );
      })}
    </div>
  );
};
