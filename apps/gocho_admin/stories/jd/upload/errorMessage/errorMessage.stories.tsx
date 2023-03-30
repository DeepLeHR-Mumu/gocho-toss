import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ErrorMessage } from "@/pages/jd/upload/component";

export default {
  title: "공고/upload/ErrorMessage",
  component: ErrorMessage,
  argTypes: {
    msg: {
      description: "에러 메세지 내용",
    },
  },
  parameters: {
    componentSubtitle: "폼 입력시 잘못된 입력시 노출될 에러메세지",
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  msg: "에러메세지 입니다.",
};
