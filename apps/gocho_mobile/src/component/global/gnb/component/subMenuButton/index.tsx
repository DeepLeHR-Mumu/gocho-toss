import { FunctionComponent } from "react";
import Link from "next/link";

import { subMenuButton } from "./style";
import { SubMenuButtonProps } from "./type";

export const SubMenuButton: FunctionComponent<SubMenuButtonProps> = ({ link, title }) => {
  return (
    <li css={subMenuButton} role="presentation">
      <Link href={link} passHref>
        {title}
      </Link>
    </li>
  );
};
