import { FunctionComponent } from "react";
import Link from "next/link";

import { subMenuButtonCSS } from "./style";
import { SubMenuButtonProps } from "./type";

export const SubMenuButton: FunctionComponent<SubMenuButtonProps> = ({
  link,
  title,
  setActiveIndex,
}) => {
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
      <Link href={link} passHref>
        {title}
      </Link>
    </li>
  );
};
