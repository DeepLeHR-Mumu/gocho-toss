import Link from "next/link";
import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { ButtonProps, LinkProps } from "./type";

export const CommonTextLink: FunctionComponent<LinkProps | ButtonProps> = ({ type, url, onClickHandler, text }) => {
  if (type === "internalLink" && url) {
    return (
      <Link href={url} passHref css={cssObj.link}>
        {text}
      </Link>
    );
  }

  if (type === "externalLink" && url && !onClickHandler) {
    return (
      <a target="_blank" href={url} rel="noreferrer noopener" css={cssObj.link}>
        {text}
      </a>
    );
  }

  if (type === "button" && onClickHandler) {
    return (
      <button type="button" onClick={onClickHandler}>
        <p css={cssObj.link}>{text}</p>
      </button>
    );
  }
  return null;
};
