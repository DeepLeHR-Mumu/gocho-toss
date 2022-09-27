import { FunctionComponent } from "react";
import Image from "next/image";

import checkIconImage from "shared-image/global/common/mainBanner_check.png";

import { wrapper, logo, title, desc, iconBox } from "./style";

interface SlideCardProps {
  carouselData: { title: string; desc: string; bgColor: string };
}
export const SlideCard: FunctionComponent<SlideCardProps> = ({ carouselData }) => {
  return (
    <div css={wrapper(carouselData.bgColor)}>
      <div css={logo}>
        <p>고초대졸닷컴</p>
        <div css={iconBox}>
          <Image src={checkIconImage} alt="" objectFit="contain" layout="fill" />
        </div>
      </div>
      <p css={title}>{carouselData.title}</p>
      <p css={desc}>{carouselData.desc}</p>
    </div>
  );
};
