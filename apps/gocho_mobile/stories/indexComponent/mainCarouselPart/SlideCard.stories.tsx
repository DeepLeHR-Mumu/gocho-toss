import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SlideCard } from "@pages/indexComponent/part/mainCarouselPart/component/sliderCard";

export default {
  title: "SlideCard",
  component: SlideCard,
} as ComponentMeta<typeof SlideCard>;

export const Template: ComponentStory<typeof SlideCard> = (args) => {
  return <SlideCard {...args} />;
};

export const 기본 = Template.bind({});
기본.args = { carouselData: { title: "타이틀", desc: "설명", bgColor: "pink" } };
