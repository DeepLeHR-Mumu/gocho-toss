import { FunctionComponent } from "react";
import Link from "next/link";

import { subMenuButton } from "./style";
import { SubMenuButtonProps } from "./type";

export const SubMenuButton: FunctionComponent<SubMenuButtonProps> = ({ link, title, setOpenedElement }) => {
  return (
    <li role="presentation">
      <button
        css={subMenuButton}
        type="button"
        onClick={() => {
          setOpenedElement(null);
        }}
      >
        <Link href={{ pathname: link }} passHref>
          {title}
        </Link>
      </button>
    </li>
  );
};
