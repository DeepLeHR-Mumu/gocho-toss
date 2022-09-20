import { FunctionComponent } from "react";
import { topMsg, wrapper } from "./style";

interface SlideCardProps {
  carouselData: { title: string; desc: string; bgColor: string };
}
export const SlideCard: FunctionComponent<SlideCardProps> = ({ carouselData }) => {
  return (
    <div css={wrapper(carouselData.bgColor)}>
      <p css={topMsg}>open</p>
      <p>고초대졸닷컴</p>
      <p>{carouselData.title}</p>
      <p>{carouselData.desc}</p>
    </div>
  );
};
