import { FunctionComponent } from "react";
import Link from "next/link";

import { subMenuButtonCSS } from "./style";
import { SubMenuButtonProps } from "./type";

export const SubMenuButton: FunctionComponent<SubMenuButtonProps> = ({ subMenuData, setActiveIndex }) => {
  return (
    <li
      css={subMenuButtonCSS}
      onClick={() => {
        return setActiveIndex(null);
      }}
      onKeyDown={() => {
        return setActiveIndex(null);
      }}
      role="presentation"
    >
      {subMenuData.pageQuery ? (
        <Link
          href={{
            pathname: subMenuData.menuLink,
            query: { page: 1, order: subMenuData.pageOrder },
          }}
          passHref
        >
          {subMenuData.menuTitle}
        </Link>
      ) : (
        <Link href={subMenuData.menuLink} passHref>
          {subMenuData.menuTitle}
        </Link>
      )}
    </li>
  );
};
