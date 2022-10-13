import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { SlideCardProps } from "./type";
import { wrapper, logo, title, desc, iconBox, linkButton, middleDescCSS, topDescCSS } from "./style";

export const SlideCard: FunctionComponent<SlideCardProps> = ({ carouselData }) => {
  return (
    <div css={wrapper(carouselData.backgroundColor)}>
      <p css={topDescCSS}>{carouselData.topDesc}</p>
      <div css={logo}>
        <p css={middleDescCSS}>{carouselData.middleDesc}</p>
        {carouselData.iconImage && (
          <div css={iconBox}>
            <Image src={carouselData.iconImage} alt="" objectFit="contain" layout="fill" />
          </div>
        )}
      </div>
      <strong css={title}>{carouselData.title}</strong>
      <p css={desc}>{carouselData.lastDesc}</p>

      {carouselData.buttonObj && carouselData.buttonObj.target === "_self" && (
        <Link href={carouselData.buttonObj.url} passHref target={carouselData.buttonObj.target}>
          <a css={linkButton(carouselData.buttonObj.backgroundColor, carouselData.buttonObj.color)}>
            <FiArrowRight />
            {carouselData.buttonObj.text}
          </a>
        </Link>
      )}
      {carouselData.buttonObj && carouselData.buttonObj.target === "_blank" && (
        <a
          href={carouselData.buttonObj.url}
          target={carouselData.buttonObj.target}
          css={linkButton(carouselData.buttonObj.backgroundColor, carouselData.buttonObj.color)}
        >
          <FiArrowRight />
          {carouselData.buttonObj.text}
        </a>
      )}
    </div>
  );
};
