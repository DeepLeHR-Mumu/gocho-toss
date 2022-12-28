import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

export default {
  title: "SharedRadioButton",
  component: SharedRadioButton,
  argTypes: {
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
} as ComponentMeta<typeof SharedRadioButton>;

const Template: ComponentStory<typeof SharedRadioButton> = (args) => <SharedRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = { desc: "있음", registerObj: undefined };
