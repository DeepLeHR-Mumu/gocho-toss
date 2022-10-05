import { FunctionComponent } from "react";
import Link from "next/link";

import { subMenuButtonCSS } from "./style";
import { SubMenuButtonProps } from "./type";

export const SubMenuButton: FunctionComponent<SubMenuButtonProps> = ({ isPageQuery, link, title, setActiveIndex }) => {
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
      {isPageQuery ? (
        <Link
          href={{
            pathname: link,
            query: { page: 1 },
          }}
          passHref
        >
          {title}
        </Link>
      ) : (
        <Link href={link} passHref>
          {title}
        </Link>
      )}
    </li>
  );
};
