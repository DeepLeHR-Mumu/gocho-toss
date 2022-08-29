import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBox } from ".";

export default {
  title: "공용 컴포넌트/common/atom/CheckBox",
  component: CheckBox,
  argTypes: {
    type: {
      description: "checkbox 또는 radio",
    },
    value: {
      description: "해당 체크박스의 결과값",
    },
    text: {
      description: "label 입력되는 텍스트값",
    },
    registerObj: {
      description: "react-hook-form 설정 객체",
    },
    checked: {
      description: "선택된 상태일시 true 체크사항 없을시 미입력",
    },
  },
  parameters: {
    componentSubtitle: "전체적으로 사용되는 체크박스 디자인",
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
  type: "checkbox",
  value: "value",
  text: "체크박스 텍스트",
  registerObj: undefined,
};
