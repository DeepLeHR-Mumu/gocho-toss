import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { menuArr } from "./constant";
import { cssObj } from "./style";

export const SideBar: FunctionComponent = () => {
  const router = useRouter();
  // console.log(router.asPath, router.pathname);

  return (
    <aside css={cssObj.wrapper}>
      <ul css={cssObj.listBox}>
        {menuArr.map((menu) => (
          <li key={menu.menuTitle}>
            <strong css={cssObj.title}>{menu.menuTitle}</strong>
            {menu.subMenuArr?.map((subMenu) => {
              const isActive = router.pathname === subMenu.menuLink.split("?")[0];
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
