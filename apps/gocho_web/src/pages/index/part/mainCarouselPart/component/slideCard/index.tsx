import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import {
  slideWrapper,
  slideInfo,
  middleDescCSS,
  middleDescIconBox,
  lastDescCSS,
  linkButtonContainer,
  titleCSS,
  linkButton,
  imageCss,
} from "./style";

import { SlideCardProps } from "./type";

export const SlideCard: FunctionComponent<SlideCardProps> = ({ slideData }) => {
  return (
    <div css={slideWrapper}>
      <div css={slideInfo(slideData.backgroundColor)}>
        <p css={middleDescCSS}>
          {slideData.middleDesc}
          {slideData.iconImage && (
            <span css={middleDescIconBox}>
              <Image src={slideData.iconImage} alt="" fill />
            </span>
          )}
        </p>
        <strong css={titleCSS}>{slideData.title}</strong>
        <em css={lastDescCSS}>{slideData.lastDesc}</em>
        <div css={linkButtonContainer}>
          {slideData.topButtonObj && slideData.topButtonObj.target === "_self" && (
            <Link
              css={linkButton(slideData.topButtonObj.backgroundColor, slideData.topButtonObj.color)}
              href={slideData.topButtonObj.url}
              passHref
              target={slideData.topButtonObj.target}
              onClick={slideData.topButtonObj.onClick}
            >
              <FiArrowRight />
              {slideData.topButtonObj.text}
            </Link>
          )}
          {slideData.topButtonObj && slideData.topButtonObj.target === "_blank" && (
            <a
              href={slideData.topButtonObj.url}
              target={slideData.topButtonObj.target}
              css={linkButton(slideData.topButtonObj.backgroundColor, slideData.topButtonObj.color)}
              onClick={slideData.topButtonObj.onClick}
            >
              <FiArrowRight />
              {slideData.topButtonObj.text}
            </a>
          )}
          {slideData.bottomButtonObj && slideData.bottomButtonObj.target === "_self" && (
            <Link
              css={linkButton(slideData.bottomButtonObj.backgroundColor, slideData.bottomButtonObj.color)}
              href={slideData.bottomButtonObj.url}
              passHref
              target={slideData.bottomButtonObj.target}
              onClick={slideData.bottomButtonObj.onClick}
            >
              <FiArrowRight />
              {slideData.bottomButtonObj.text}
            </Link>
          )}
          {slideData.bottomButtonObj && slideData.bottomButtonObj.target === "_blank" && (
            <a
              href={slideData.bottomButtonObj.url}
              target={slideData.bottomButtonObj.target}
              css={linkButton(slideData.bottomButtonObj.backgroundColor, slideData.bottomButtonObj.color)}
              onClick={slideData.bottomButtonObj.onClick}
            >
              <FiArrowRight />
              {slideData.bottomButtonObj.text}
            </a>
          )}
        </div>
      </div>
      <div css={imageCss}>
        <Image priority unoptimized src={slideData.backgroundImage} alt={slideData.title} fill />
      </div>
    </div>
  );
};
