import { FunctionComponent } from "react";
import Link from "next/link";

import { changeBannerColor, linkCSS, titleCSS, descCSS } from "./style";
import { BannerCardProps } from "./type";

// 위로 빼도 될듯? 복잡하지 않은 로직
export const BannerCard: FunctionComponent<BannerCardProps> = ({
  title,
  desc,
  backgroundColor,
  link,
}) => {
  return (
    <li css={changeBannerColor(backgroundColor)}>
      <Link href={link} passHref>
        <a css={linkCSS}>
          <strong css={titleCSS}>{title}</strong>
          <p css={descCSS}>{desc}</p>
        </a>
      </Link>
    </li>
  );
};
