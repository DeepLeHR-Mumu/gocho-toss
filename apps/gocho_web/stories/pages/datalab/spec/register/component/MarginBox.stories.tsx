import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MarginBox } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/MarginBox",
  component: MarginBox,
  argTypes: {
    optionObj: {
      description: "스타일을 위한 옵션객체 {location(마진방향), marginValue(마진값), maxWidth(최종가로사이즈값)}",
    },
  },
  parameters: {
    componentSubtitle: "CSS maxWidth와 마진(마진방향, 마진값)을 주기위한 박스 (시각적으로 미노출)",
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof MarginBox>;

const Template: ComponentStory<typeof MarginBox> = (args) => {
  return <MarginBox {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  optionObj: {
    marginLocation: "top",
    marginValue: 2,
    maxWidth: 2,
  },
};
