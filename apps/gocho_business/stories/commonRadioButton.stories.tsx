import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SharedRadioButton } from "shared-ui/common/sharedRadioButton";

export default {
  title: "SharedRadioButton",
  component: SharedRadioButton,
  argTypes: {
    value: {
      description: "radio value",
    },
    id: {
      description: "label + input의 공통 for을 위한 id",
    },
    children: {
      description: "React Node 구조",
    },
    registerObj: {
      description: "React hook form register 함수",
    },
  },
  parameters: {
    componentSubtitle: "각종 정보 출력을 위한 박스",
  },
} as ComponentMeta<typeof SharedRadioButton>;

const Template: ComponentStory<typeof SharedRadioButton> = (args) => <SharedRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = { value: "yes", id: "id", children: "", registerObj: undefined };
