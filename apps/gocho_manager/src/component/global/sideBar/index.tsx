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
            return (
              <li key={menu.menuTitle} css={linkContainer}>
                <strong>{menu.menuTitle}</strong>
                {menu.subMenuArr?.map((subMenu) => {
                  const isActive = activeMenu === subMenu.menuTitle;

                  return (
                    <Link key={subMenu.menuTitle} href={subMenu.menuLink} passHref>
                      <button
                        css={buttonBox(isActive)}
                        type="button"
                        onClick={() => {
                          return setActiveMenu(subMenu.menuTitle);
                        }}
                      >
                        {subMenu.menuTitle}
                      </button>
                    </Link>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
