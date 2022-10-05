import { FunctionComponent } from "react";
import Link from "next/link";
import { menuArr } from "./constant";

export const SideBar: FunctionComponent = () => {
  return (
    <aside>
      <nav>
        <ul>
          {menuArr.map((menu) => {
            return (
              <li>
                <Link href={menu.menuLink} passHref>
                  {menu.menuTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
