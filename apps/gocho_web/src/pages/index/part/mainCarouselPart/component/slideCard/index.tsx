import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { conningAddClickEvent } from "shared-ga/home";

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

export const SlideCard: FunctionComponent<SlideCardProps> = ({ slideData }) => {
  return (
    <div css={slideWrapper}>
      <div css={slideInfo(slideData.backgroundColor)}>
        <p css={topDescCSS}>{slideData.topDesc}</p>
        <p css={middleDescCSS}>
          {slideData.middleDesc}
          {slideData.iconImage && (
            <span css={middleDescIconBox}>
              <Image src={slideData.iconImage} alt="" objectFit="contain" layout="fill" />
            </span>
          )}
        </p>
        <strong css={titleCSS}>{slideData.title}</strong>
        <em css={lastDescCSS}>{slideData.lastDesc}</em>
        {slideData.buttonObj && slideData.buttonObj.target === "_self" && (
          <Link href={slideData.buttonObj.url} passHref target={slideData.buttonObj.target}>
            <a css={linkButton(slideData.buttonObj.backgroundColor, slideData.buttonObj.color)}>
              <FiArrowRight />
              {slideData.buttonObj.text}
            </a>
          </Link>
        )}
        {slideData.buttonObj && slideData.buttonObj.target === "_blank" && (
          <a
            onClick={
              slideData.id === 1
                ? () => {
                    conningAddClickEvent();
                  }
                : undefined
            }
            href={slideData.buttonObj.url}
            target={slideData.buttonObj.target}
            css={linkButton(slideData.buttonObj.backgroundColor, slideData.buttonObj.color)}
          >
            <FiArrowRight />
            {slideData.buttonObj.text}
          </a>
        )}
      </div>
      <div css={dimmed} />
      <Image priority src={slideData.backgroundImage} alt={slideData.title} layout="responsive" />
    </div>
  );
};
