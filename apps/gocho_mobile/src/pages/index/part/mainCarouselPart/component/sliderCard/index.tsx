import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { SlideCardProps } from "./type";
import { wrapper, logo, title, desc, iconBox, linkButton, middleDescCSS, linkButtonContainer } from "./style";

export const SlideCard: FunctionComponent<SlideCardProps> = ({ carouselData }) => {
  return (
    <div css={wrapper(carouselData.backgroundColor)}>
      <div css={logo}>
        <p css={middleDescCSS}>{carouselData.middleDesc}</p>
        {carouselData.iconImage && (
          <div css={iconBox}>
            <Image src={carouselData.iconImage} alt="" fill />
          </div>
        )}
      </div>
      <strong css={title}>{carouselData.title}</strong>
      <p css={desc}>{carouselData.lastDesc}</p>
      <div css={linkButtonContainer}>
        {carouselData.topButtonObj && carouselData.topButtonObj.target === "_self" && (
          <Link
            href={carouselData.topButtonObj.url}
            passHref
            target={carouselData.topButtonObj.target}
            onClick={carouselData.topButtonObj.onClick}
            css={linkButton(carouselData.topButtonObj.backgroundColor, carouselData.topButtonObj.color)}
          >
            <FiArrowRight />
            {carouselData.topButtonObj.text}
          </Link>
        )}
        {carouselData.topButtonObj && carouselData.topButtonObj.target === "_blank" && (
          <a
            href={carouselData.topButtonObj.url}
            target={carouselData.topButtonObj.target}
            css={linkButton(carouselData.topButtonObj.backgroundColor, carouselData.topButtonObj.color)}
            onClick={carouselData.topButtonObj.onClick}
          >
            <FiArrowRight />
            {carouselData.topButtonObj.text}
          </a>
        )}
        {carouselData.bottomButtonObj && carouselData.bottomButtonObj.target === "_self" && (
          <Link
            href={carouselData.bottomButtonObj.url}
            passHref
            target={carouselData.bottomButtonObj.target}
            onClick={carouselData.bottomButtonObj.onClick}
            css={linkButton(carouselData.bottomButtonObj.backgroundColor, carouselData.bottomButtonObj.color)}
          >
            <FiArrowRight />
            {carouselData.bottomButtonObj.text}
          </Link>
        )}
        {carouselData.bottomButtonObj && carouselData.bottomButtonObj.target === "_blank" && (
          <a
            href={carouselData.bottomButtonObj.url}
            target={carouselData.bottomButtonObj.target}
            css={linkButton(carouselData.bottomButtonObj.backgroundColor, carouselData.bottomButtonObj.color)}
            onClick={carouselData.bottomButtonObj.onClick}
          >
            <FiArrowRight />
            {carouselData.bottomButtonObj.text}
          </a>
        )}
      </div>
    </div>
  );
};
