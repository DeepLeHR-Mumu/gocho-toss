import { ComponentStory, ComponentMeta } from "@storybook/react";

import { H2Heading } from "@component/atom/h2Heading";

export default {
  title: "component/atom/H2Heading",
  component: H2Heading,
  argTypes: { title: { control: "text", description: "타이틀로 표시될 문자열" } },
  parameters: {
    componentSubtitle: "모바일 프로젝트 전반적으로 사용되는 H2 타이틀",
  },
} as ComponentMeta<typeof H2Heading>;

const Template: ComponentStory<typeof H2Heading> = (args) => {
  return <H2Heading {...args} />;
};

export const 기본 = Template.bind({});
기본.args = { title: "타이틀 텍스트" };
