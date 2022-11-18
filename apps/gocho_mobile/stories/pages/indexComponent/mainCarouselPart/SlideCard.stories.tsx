import { ComponentStory, ComponentMeta } from "@storybook/react";

import checkIconImage from "shared-image/global/common/yellow_check.png";

import { SlideCard } from "@pages/index/part/mainCarouselPart/component/sliderCard";

export default {
  title: "pages/indexComponent/SlideCard",
  component: SlideCard,
  argTypes: {
    carouselData: {
      control: "object",
      description: "슬라이드 제목, 내용, 배경색에 해당되는 문자열로 이루어진 객체",
    },
  },
} as ComponentMeta<typeof SlideCard>;

const Template: ComponentStory<typeof SlideCard> = (args) => {
  return <SlideCard {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  carouselData: {
    id: 0,
    topDesc: "OPEN",
    middleDesc: "고초대졸닷컴",
    title: "웹사이트 전체 리뉴얼",
    lastDesc: "열심히 준비했습니다",
    iconImage: checkIconImage,
    backgroundColor: "#121012",
    buttonObj: {
      target: "_self" as const,
      text: "자세히보기",
      color: "#fff",
      backgroundColor: "#333",
      url: "/event/renewal",
    },
  },
};
