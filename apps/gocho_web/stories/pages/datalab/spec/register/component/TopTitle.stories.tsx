import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopTitle } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/TopTitle",
  component: TopTitle,
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
} as ComponentMeta<typeof TopTitle>;

const Template: ComponentStory<typeof TopTitle> = (args) => {
  return <TopTitle {...args} />;
};

export const 일반 = Template.bind({});
일반.args = {
  title: "상단 타이틀",
  desc: "하단 설명글",
};
