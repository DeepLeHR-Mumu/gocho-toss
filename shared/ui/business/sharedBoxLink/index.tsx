import Link from "next/link";
import { FunctionComponent } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

import { cssObj } from "./style";
import { InternalLinkProps, ExternalLinkProps } from "./type";
import { colorConverter } from "./util";

export const SharedBoxLink: FunctionComponent<ExternalLinkProps | InternalLinkProps> = ({
  colorVariation,
  text,
  externalUrl,
  internalUrl,
  iconLocation,
  isFullWidth,
}) => {
  const { fontColor, backGroundColor } = colorConverter(colorVariation);

  if (internalUrl) {
    return (
      <Link href={internalUrl} passHref css={cssObj.wrapper(backGroundColor, isFullWidth)}>
        <div css={cssObj.container}>
          {iconLocation === "left" && (
            <div css={cssObj.icon(fontColor, iconLocation)}>
              <FiArrowLeft />
            </div>
          )}
          <span css={cssObj.text(fontColor)}>{text}</span>
          {iconLocation === "right" && (
            <div css={cssObj.icon(fontColor, iconLocation)}>
              <FiArrowRight />
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <a css={cssObj.wrapper(backGroundColor, isFullWidth)} href={externalUrl} target="_blank" rel="noreferrer noopener">
      <div css={cssObj.container}>
        <span css={cssObj.text(fontColor)}>{text}</span>
        <div css={cssObj.icon(fontColor, "right")}>
          <FiExternalLink />
        </div>
      </div>
    </a>
  );
};
