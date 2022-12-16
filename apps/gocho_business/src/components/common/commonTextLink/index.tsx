import Link from "next/link";
import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { ButtonProps, LinkProps } from "./type";

export const CommonTextLink: FunctionComponent<LinkProps | ButtonProps> = ({ type, url, onClick, text }) => {
  if (type === "internalLink") {
    return (
      <Link href={url} passHref>
        <a css={cssObj.link}>{text}</a>
      </Link>
    );
  }

  if (type === "externalLink") {
    return (
      <a target="_blank" href={url} rel="noreferrer noopener" css={cssObj.link}>
        {text}
      </a>
    );
  }

  if (type === "button") {
    return (
      <button type="button" onClick={onClick}>
        <p css={cssObj.link}>{text}</p>
      </button>
    );
  }
  return null;
};
