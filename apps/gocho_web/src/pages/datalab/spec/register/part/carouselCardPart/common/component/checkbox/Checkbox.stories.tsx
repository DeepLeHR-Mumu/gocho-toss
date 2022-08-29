import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBox } from ".";

export default {
  title:
    "datalab/spec/register/part/carouselCardPart/common/component/CheckBox",
  component: CheckBox,
  argTypes: {
    isChecked: {
      description: "선택 결과 값 불린 인자값",
    },
  },
  parameters: {
    componentSubtitle: "스펙등록에 사용되는 체크박스 디자인",
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  isChecked: false,
};
