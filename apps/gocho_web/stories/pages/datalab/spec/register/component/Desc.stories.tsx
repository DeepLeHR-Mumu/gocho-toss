import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Desc } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/Desc",
  component: Desc,
  argTypes: {
    desc: {
      control: "text",
      description: "기입될 설명글",
    },
  },
  parameters: {
    componentSubtitle: "carouselCard 중간 설명글",
  },
} as ComponentMeta<typeof Desc>;

const Template: ComponentStory<typeof Desc> = (args) => {
  return <Desc {...args} />;
};

export const 일반 = Template.bind({});
일반.args = {
  desc: "자격증을 기입해주세요!",
};
