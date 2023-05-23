import { FunctionComponent } from "react";
import Image from "next/image";

import { changeBannerColor, linkCSS, titleCSS, descCSS, iconBox } from "./style";
import { BannerCardProps } from "./type";

export const BannerCard: FunctionComponent<BannerCardProps> = ({ title, desc, backgroundColor, link, iconSrc }) => {
  return (
    <li css={changeBannerColor(backgroundColor)}>
      <a css={linkCSS} href={link} target="_blank" rel="noreferrer">
        <strong css={titleCSS}>{title}</strong>
        <p css={descCSS}>{desc}</p>
        <div css={iconBox}>
          <Image src={iconSrc} alt="" fill sizes="1" />
        </div>
      </a>
    </li>
  );
};
