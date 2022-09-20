import { FunctionComponent } from "react";
import Image from "next/image";

import {
  slideWrapper,
  slideInfo,
  topDescCSS,
  middleDescCSS,
  middleDescIconBox,
  lastDescCSS,
  titleCSS,
  dimmed,
} from "./style";

import { SlideCardProps } from "./type";

export const SlideCard: FunctionComponent<SlideCardProps> = ({
  topDesc,
  middleDesc,
  title,
  lastDesc,
  backgroundColor,
  iconImage,
  backgroundImage,
}) => {
  return (
    <div css={slideWrapper}>
      <div css={slideInfo(backgroundColor)}>
        <p css={topDescCSS}>{topDesc}</p>
        <p css={middleDescCSS}>
          {middleDesc}
          {iconImage && (
            <div css={middleDescIconBox}>
              <Image src={iconImage} alt="" objectFit="contain" layout="fill" />
            </div>
          )}
        </p>
        <h3 css={titleCSS}>{title}</h3>
        <p css={lastDescCSS}>{lastDesc}</p>
      </div>
      <div css={dimmed} />
      <Image priority src={backgroundImage} alt={title} layout="responsive" />
    </div>
  );
};
