import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { menuArr } from "./constant";
import { cssObj } from "./style";

export const SideBar: FunctionComponent = () => {
  const router = useRouter();

  const menuActiveHandler = (path: string, menu: string) => {
    if (path === "/business/jd/list")
      return menu.includes(String("/business/jd/list")) && menu.includes(String(router.query.type));
    return path === menu.split("?")[0];
  };

  return (
    <aside css={cssObj.wrapper}>
      <ul css={cssObj.listBox}>
        {menuArr.map((menu) => (
          <li key={menu.menuTitle}>
            <strong css={cssObj.title}>{menu.menuTitle}</strong>
            {menu.subMenuArr?.map((subMenu) => {
              const isActive = menuActiveHandler(router.pathname, subMenu.menuLink);
              return (
                <Link
                  key={subMenu.menuTitle}
                  href={subMenu.menuLink}
                  css={[isActive ? cssObj.activeButton : cssObj.linkButton]}
                  passHref
                >
                  {subMenu.menuTitle}
                </Link>
              );
            })}
          </li>
        ))}
      </ul>
    </aside>
  );
};
