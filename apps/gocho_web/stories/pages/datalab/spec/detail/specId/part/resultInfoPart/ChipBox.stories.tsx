import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChipBox } from "@pages/datalab/spec/detail/part/resultInfoPart/component/chipBox";

export default {
  title: "데이터랩/스펙디테일/ChipBox",
  component: ChipBox,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙이 출력되는 페이지",
  },
} as ComponentMeta<typeof ChipBox>;

const Template: ComponentStory<typeof ChipBox> = (args) => {
  return <ChipBox {...args} />;
};

export const 기본 = Template.bind({});
