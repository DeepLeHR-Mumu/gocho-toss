import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SlideCard } from "@pages/indexComponent/part/mainCarouselPart/component/sliderCard";

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
기본.args = { carouselData: { title: "타이틀", desc: "설명", bgColor: "pink" } };
