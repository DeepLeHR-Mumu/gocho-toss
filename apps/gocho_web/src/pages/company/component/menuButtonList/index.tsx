import { FunctionComponent } from "react";

import { menuButtonArr } from "./constant";
import { MenuButtonListProps } from "./type";
import { buttonContainer, menuButton } from "./style";

export const MenuButtonList: FunctionComponent<MenuButtonListProps> = ({ activeMenu }) => {
  return (
    <div css={buttonContainer}>
      {menuButtonArr.map((menu) => {
        const isActive = menu.title === activeMenu;
        const scrollToPartHandler = () => {
          document.getElementById(menu.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
        };

        return (
          <button
            type="button"
            css={menuButton(isActive)}
            key={`companyDetailMenu${menu.title}`}
            onClick={scrollToPartHandler}
          >
            {menu.title}
          </button>
        );
      })}
    </div>
  );
};
