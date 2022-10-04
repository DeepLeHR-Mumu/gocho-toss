import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import {
  slideWrapper,
  slideInfo,
  topDescCSS,
  middleDescCSS,
  middleDescIconBox,
  lastDescCSS,
  titleCSS,
  dimmed,
  linkButton,
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
  buttonColor,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div css={slideWrapper}>
      <div css={slideInfo(backgroundColor)}>
        <p css={topDescCSS}>{topDesc}</p>
        <p css={middleDescCSS}>
          {middleDesc}
          {iconImage && (
            <span css={middleDescIconBox}>
              <Image src={iconImage} alt="" objectFit="contain" layout="fill" />
            </span>
          )}
        </p>
        <strong css={titleCSS}>{title}</strong>
        <em css={lastDescCSS}>{lastDesc}</em>
        {buttonText && (
          <Link href={`${buttonUrl}`} passHref>
            <a css={linkButton(buttonColor)}>
              <FiArrowRight />
              {buttonText}
            </a>
          </Link>
        )}
      </div>
      <div css={dimmed} />
      <Image priority src={backgroundImage} alt={title} layout="responsive" />
    </div>
  );
};
