import Link from "next/link";
import { FC } from "react";

import { MenuLinkProps } from "./type";
import { cssObj } from "./style";

export const MenuLink: FC<MenuLinkProps> = ({ text, type, isSelected }) => (
  <Link
    key={text}
    href={{
      query: {
        type,
      },
    }}
    css={cssObj.menu(isSelected)}
  >
    {text}
  </Link>
);
