import Link from "next/link";
import { FunctionComponent } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

import { cssObj } from "./style";
import { InternalLinkProps, ExternalLinkProps } from "./type";
import { colorConverter } from "./util";

export const SharedTextLink: FunctionComponent<ExternalLinkProps | InternalLinkProps> = ({
  fontColor,
  text,
  externalUrl,
  internalUrl,
  iconLocation,
}) => {
  const { convertedFontColor } = colorConverter(fontColor);

  if (internalUrl) {
    return (
      <Link href={internalUrl} passHref>
        <a css={cssObj.container}>
          {iconLocation === "left" && (
            <div css={cssObj.icon(convertedFontColor, iconLocation)}>
              <FiArrowLeft />
            </div>
          )}
          <span css={cssObj.text(convertedFontColor)}>{text}</span>
          {iconLocation === "right" && (
            <div css={cssObj.icon(convertedFontColor, iconLocation)}>
              <FiArrowRight />
            </div>
          )}
        </a>
      </Link>
    );
  }
  return (
    <a css={cssObj.container} href={externalUrl} target="_blank" rel="noreferrer noopener">
      <span css={cssObj.text(convertedFontColor)}>{text}</span>
      <div css={cssObj.icon(convertedFontColor, "right")}>
        <FiExternalLink />
      </div>
    </a>
  );
};
