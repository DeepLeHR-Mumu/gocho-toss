import Link from "next/link";
import { FC } from "react";

import { FiChevronRight } from "react-icons/fi";

import { NoListCardProps } from "./type";
import { cssObj } from "./style";

export const NoListCard: FC<NoListCardProps> = ({ text, href, linkText }) => {
  return (
    <div css={cssObj.listWrapper}>
      <p css={cssObj.textFont}>{text}</p>
      {href && linkText && (
        <Link href={href} css={cssObj.linkTextWrapper}>
          <p>{linkText}</p>
          <FiChevronRight css={cssObj.linkIcon} />
        </Link>
      )}
    </div>
  );
};
