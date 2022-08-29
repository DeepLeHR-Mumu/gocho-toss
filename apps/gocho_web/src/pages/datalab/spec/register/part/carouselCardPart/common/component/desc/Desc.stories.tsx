import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Desc } from "..";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/Desc",
  component: Desc,
  argTypes: {
    desc: {
      description: "기입될 설명글",
    },
  },
  parameters: {
    componentSubtitle: "스펙등록에서 중간 설명 컴포넌트",
  },
} as ComponentMeta<typeof Desc>;

const Template: ComponentStory<typeof Desc> = (args) => {
  return <Desc {...args} />;
};

export const 일반 = Template.bind({});
일반.args = {
  desc: "마이페이지 캐로셀 중간 설명글",
};
