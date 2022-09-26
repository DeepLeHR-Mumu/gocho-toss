import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { changeBannerColor, linkCSS, titleCSS, descCSS, iconBox } from "./style";
import { BannerCardProps } from "./type";

export const BannerCard: FunctionComponent<BannerCardProps> = ({ title, desc, backgroundColor, link, iconSrc }) => {
  return (
    <li css={changeBannerColor(backgroundColor)}>
      <Link href={link} passHref>
        <a css={linkCSS}>
          <strong css={titleCSS}>{title}</strong>
          <p css={descCSS}>{desc}</p>
          <div css={iconBox}>
            <Image src={iconSrc} alt="" layout="fill" objectFit="contain" />
          </div>
        </a>
      </Link>
    </li>
  );
};
