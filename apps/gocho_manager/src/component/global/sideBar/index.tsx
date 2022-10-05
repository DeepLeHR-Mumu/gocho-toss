import { FunctionComponent, useState } from "react";
import Link from "next/link";

import { menuArr } from "./constant";
import { asideContainer, linkContainer, buttonBox } from "./style";

export const SideBar: FunctionComponent = () => {
  const [activeMenu, setActiveMenu] = useState<string>();
  return (
    <aside css={asideContainer}>
      <nav>
        <ul>
          {menuArr.map((menu) => {
            const isActive = activeMenu === menu.menuTitle;
            return (
              <li css={linkContainer(isActive)}>
                <Link href={menu.menuLink} passHref>
                  <button
                    css={buttonBox(isActive)}
                    type="button"
                    onClick={() => {
                      return setActiveMenu(menu.menuTitle);
                    }}
                  >
                    {menu.menuTitle}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
