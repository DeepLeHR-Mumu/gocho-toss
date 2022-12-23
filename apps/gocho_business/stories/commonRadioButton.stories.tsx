import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommonRadioButton } from "@/components/common";

export default {
  title: "CommonRadioButton",
  component: CommonRadioButton,
  argTypes: {
    id: {
      description: "radio htmlFor사용을 위한 id",
    },
    desc: {
      description: "radio 안내 문구",
    },
    registerObj: {
      description: "React hook form register 함수",
    },
  },
  parameters: {
    componentSubtitle: "각종 정보 출력을 위한 박스",
  },
} as ComponentMeta<typeof CommonRadioButton>;

const Template: ComponentStory<typeof CommonRadioButton> = (args) => <CommonRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = { id: "isBus", desc: "있음", registerObj: undefined };
