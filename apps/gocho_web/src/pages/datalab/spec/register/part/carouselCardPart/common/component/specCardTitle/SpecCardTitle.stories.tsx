import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SpecCardTitle } from ".";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/SpecCardTitle",
  component: SpecCardTitle,
  argTypes: {
    title: {
      description: "상단 타이틀",
    },
    desc: {
      description: "하단 설명글",
    },
  },
  parameters: {
    componentSubtitle: "마이페이지 캐로셀 상단 타이틀 컴포넌트",
  },
} as ComponentMeta<typeof SpecCardTitle>;

const Template: ComponentStory<typeof SpecCardTitle> = (args) => {
  return <SpecCardTitle {...args} />;
};

export const 일반 = Template.bind({});
일반.args = {
  title: "상단 타이틀",
  desc: "하단 설명글",
};
