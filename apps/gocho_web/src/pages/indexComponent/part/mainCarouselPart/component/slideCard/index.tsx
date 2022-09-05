import { FunctionComponent } from "react";
import Image from "next/image";

import { slideWrapper, slideInfo, ddayCSS, infoTitle, dayTimeCSS, dimmed } from "./style";
import { SlideCardProps } from "./type";
// NOTMYFAULT : 이미지 훗날 CDN으로 뺀 후 string으로 교체

export const SlideCard: FunctionComponent<SlideCardProps> = ({ imgSrc, title, dday, dayTime }) => {
  return (
    <div css={slideWrapper}>
      <div css={slideInfo}>
        <p css={ddayCSS}>D-{dday}</p>
        <h2 css={infoTitle}>{title}</h2>
        <p css={dayTimeCSS}>{dayTime}</p>
      </div>
      <div css={dimmed} />
      <Image priority src={imgSrc} alt={title} layout="responsive" />
    </div>
  );
};
